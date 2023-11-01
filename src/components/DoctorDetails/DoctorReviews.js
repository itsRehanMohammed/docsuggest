import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "./doctorDetails.css";
const DoctorReviews = ({ doctor, isLoggedIn }) => {
  const [reviews] = useState(doctor.reviews);
  const [Review, setReview] = useState({ comment: "", rating: 0 });
  const submitReview = async () => {
    if (!isLoggedIn) {
      // Redirect to the login page or show a modal to log in
      return;
    }
    console.log(Review);
  };
  return (
    <section
      id="review-container"
      className="text-gray-600 body-font overflow-hidden "
    >
      <div className="container px-5 mx-auto">
        <div className="mt-8">
          <h2 className="title-font sm:text-3xl text-2xl font-medium text-gray-900">
            Reviews
          </h2>

          {isLoggedIn && (
            <div className="my-7">
              <Rating
                name="simple-controlled"
                value={Review.rating}
                onChange={(event, rating) => {
                  setReview((prevReview) => ({ ...prevReview, rating }));
                }}
              />
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                placeholder="Write your review..."
                value={Review.comment}
                onChange={(e) => {
                  const comment = e.target.value;
                  setReview((prevReview) => ({ ...prevReview, comment }));
                }}
              ></textarea>
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={submitReview}
              >
                Submit Review
              </button>
            </div>
          )}

          {reviews.length > 0 ? (
            <div className="overflow-x-hidden overflow-y-scroll max-h-[600px] hide-scrollbar">
              {reviews.map((review, index) => (
                <div
                  key={review.review_id}
                  className="mb-4 p-4 border border-gray-300 rounded "
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      {/* User avatar */}
                      <img
                        src={review.user.img}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="ml-2 text-gray-700">{review.user.name}</p>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorReviews;
