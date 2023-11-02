import { Doctor } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";

const reviewController = {
  async addReview(req, res, next) {
    try {
      const { doctorId } = req.params;
      const { comment, rating, user } = req.body;

      // Debug: Log the doctorId to check its value
      console.log("Doctor ID:", doctorId);

      // Find the doctor by ID
      const doctor = await Doctor.findById(doctorId);

      // Debug: Log the result of the query
      console.log("Found Doctor:", doctor);

      if (!doctor) {
        return next(CustomErrorHandler.notFound("Doctor not found"));
      }

      // Add the review to the doctor's profile
      doctor.reviews.push({ comment, rating, user });
      await doctor.save();

      res.status(201).json({ message: "Review added successfully" });
    } catch (err) {
      return next(err);
    }
  },

  async deleteReview(req, res, next) {
    try {
      const { doctorId, reviewID } = req.params;

      // Find the doctor by ID
      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return next(CustomErrorHandler.notFound("Doctor not found"));
      }

      // Find the review to delete by its review_id
      const reviewToDelete = doctor.reviews.find(
        (review) => review.review_id === reviewID
      );
      if (!reviewToDelete) {
        return next(CustomErrorHandler.notFound("Review not found"));
      }

      // Remove the review from the doctor's reviews array
      const updatedReviews = doctor.reviews.filter(
        (review) => review.review_id !== reviewID
      );
      doctor.reviews = updatedReviews;

      // Save the updated doctor document
      await doctor.save();

      res.json({ message: "Review deleted successfully" });
    } catch (err) {
      return next(err);
    }
  },
};

export default reviewController;
