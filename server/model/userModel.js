const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  nid: {
    type: String,
  },
  pass: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  avatar: {
  type: String,
    default:
      "https://wop-files.s3.us-west-2.amazonaws.com/no-user-image-icon-0-1685274609551.jpg",
  },
  examPackageId: [
    {
      type: Schema.Types.ObjectId,
      ref: "ExamPackage",
    },
  ],
  myExam: [
    {
      type: Schema.Types.ObjectId,
      ref: "ExamPackage",
    },
  ],
  otpmatch: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Student", "Teacher"],
    default: "Student",
  },
  hasEmailVerified: {
    type: Boolean,
    default: false,
  },
  hasPhoneVerified: { type: Boolean, default: false },

  timestamps: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
