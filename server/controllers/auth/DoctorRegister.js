import Joi from "joi";
import { RefreshToken, Doctor } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";
import { REFRESH_SECRET } from "../../config";
import multer from "multer";
import path from "path";
import doctorValidator from "../../validators/doctorValidator";

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

const doctorRegisterController = {
  async register(req, res, next) {
    // Validate the doctor
    handleMultipartData(req, res, async (err) => {
      let success = false;
      try {
        const { error } = doctorValidator.validate(req.body);

        if (error) {
          return next(error);
        }
      } catch (err) {
        return next(err);
      }

      // Check if the doctor already exists
      try {
        const exist = await Doctor.exists({ email: req.body.email });
        if (exist) {
          return next(
            CustomErrorHandler.alreadyExist(
              "Account with this email already exists"
            )
          );
        }
      } catch (err) {
        return next(err);
      }

      const { name, email, password, confirm_password } = req.body;
      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Prepare the model
      const doctor = new Doctor({
        name,
        email,
        password: hashedPassword,
        category: req.body.category,
        awards: req.body.awards,
        certificates: req.body.certificates,
        description: req.body.description,
        education: req.body.education,
        office_location: req.body.office_location,
        npi: req.body.npi,
        phone: req.body.phone,
        hours: req.body.hours,
      });

      // Generate jwt token
      let access_token;
      let refresh_token;
      try {
        // Store in the database
        const result = await doctor.save();
        // Generate jwt token
        access_token = JwtService.sign({ _id: result._id, role: result.role });
        // Generate refresh jwt token
        refresh_token = JwtService.sign(
          { _id: result._id, role: result.role },
          "1y",
          REFRESH_SECRET
        );
        // Database whitelist
        await RefreshToken.create({ token: refresh_token });
      } catch (err) {
        return next(err);
      }
      success = true;
      // Send response
      res.json({ success, access_token, refresh_token });
    });
  },
};

export default doctorRegisterController;
