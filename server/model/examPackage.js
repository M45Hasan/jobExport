express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const packageSchema = new Schema({
  packageUid:{type:String},
  packageName: { type: String, require: true },
  packageDetail: { type: String },
  packageCreater: { type: Schema.Types.ObjectId, ref: "User" },
  packageCreaterEmail: { type: String },
  packageFee: { type: String },
  premium: { type: Boolean, default: false },
  examCategory: { type: String },
  examSubCategory: { type: String },
  examQuestionList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  packageBuyer: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  timestamps: {
    type: Date,
    default: Date.now(), 
  },

  examDate: { type: String ,require:true},
  examTime: { type: String ,require:true},
});

module.exports = mongoose.model("ExamPackage", packageSchema);
