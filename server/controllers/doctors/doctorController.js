import doctorData from "../../mock/doctorData";
import { Doctor } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import multer from "multer";
import path from "path";
import doctorUpdateValidator from "../../validators/doctorUpdateValidator";
import mongoose from "mongoose";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    // 3746674586-123456789.png
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("image"); // 5mb
const doctorController = {
  async searchDoctor(req, res, next) {
    const { lat, lng, type } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        error: "Latitude and longitude are required in the query parameters.",
      });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const doctorMockData = doctorData();

    const filteredDoctors = doctorMockData.filter((doctor) => {
      const doctorLat = parseFloat(doctor.latitude);
      const doctorLng = parseFloat(doctor.longitude);

      // You can adjust the range as needed
      const range = 1.5; // Example: Doctors within 1.5 degrees of latitude and longitude

      const isWithinRange =
        Math.abs(doctorLat - latitude) <= range &&
        Math.abs(doctorLng - longitude) <= range;

      // Filter by doctor type if type parameter is provided
      const isMatchingType =
        !type || doctor.category.key.toLowerCase() === type.toLowerCase();

      return isWithinRange && isMatchingType;
    });

    const totalCount = filteredDoctors.length; // Calculate the total count

    res.json({
      totalCount, // Include the total count in the response
      doctors: filteredDoctors, // Include the filtered doctors
    });
  },
  async deleteDoctor(req, res, next) {
    try {
      const doctorId = req.params.id; // Assuming you are passing the doctor's ID as a URL parameter

      const doctor = await Doctor.findById(doctorId);

      if (!doctor) {
        return next(CustomErrorHandler.notFound("Doctor not found"));
      }

      // You can also add additional authorization logic here to check if the user has permission to delete the doctor

      await doctor.remove(); // Remove the doctor from the database

      res.json({ message: "Doctor deleted successfully" });
    } catch (err) {
      return next(err);
    }
  },
  async index(req, res, next) {
    let documents;
    try {
      documents = await Doctor.find()
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    const totalCount = documents.length; // Calculate the total count

    res.json({
      totalCount, // Include the total count in the response
      doctors: documents, // Include the filtered doctors
    });
  },

  async update(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      // Validation
      const { error } = doctorUpdateValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        // Delete the uploaded file
        if (req.file) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }

        // Return validation errors
        return next(CustomErrorHandler.validationError(error.details));
      }

      const {
        name,
        email,
        password,
        role,
        category,
        awards,
        certificates,
        description,
        education,
        office_location,
        npi,
        phone,
        lat,
        lng,
        hours,
      } = req.body;
      let document;
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Doctor not found" });
      }
      try {
        document = await Doctor.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            email,
            password,
            role,
            category,
            awards,
            certificates,
            description,
            education,
            office_location,
            npi,
            phone,
            lat,
            lng,
            hours,
            ...(req.file && { image: filePath }),
          },
          { new: true }
        );

        console.log("Updated Doctor:", document);
      } catch (err) {
        console.error("Update Error:", err);
        return next(err);
      }
      res.status(201).json(document);
    });
  },
};

export default doctorController;
