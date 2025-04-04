const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    symptoms: {
      type: [String], // Array of symptoms
      required: true,
    },
    medicalHistory: {
      type: [String], // Array of previous conditions or diseases
      default: [],
    },
    testResults: {
      type: Map, // Key-value pairs for test results
      of: String,
      default: {},
    },
    diagnosis: {
      type: String, // AI-predicted disease
      default: "Pending",
    },
    treatmentRecommendations: {
      type: String, // AI-recommended treatments
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
