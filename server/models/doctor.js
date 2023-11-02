import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "doctor" },
    category: { type: String, required: true },
    image: {
      type: String,
      get: (image) => {
        return `${APP_URL}/${image}`;
      },
    },
    description: { type: String, required: true },
    reviews: [
      {
        review_id: {
          type: String,
          required: true,
          default: () => Math.floor(Date.now() / 1000).toString(36),
          unique: true,
        },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
        user: {
          name: { type: String, required: true },
          img: {
            type: String,
            get: (image) => {
              return `${APP_URL}/${image}`;
            },
          },
        },
      },
    ],
    certificates: { type: String },
    awards: { type: String },
    education: { type: String, required: true },
    office_location: { type: String, required: true },
    lat: { type: String },
    lng: { type: String },
    npi: { type: String, required: true },
    phone: { type: Number, required: true },
    isClosed: {
      type: Boolean,
      default: false,
    },
    hours: {
      open_time: { type: Number, required: true },
      close_time: { type: Number, required: true },
    },
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model("Doctor", doctorSchema, "doctor");
