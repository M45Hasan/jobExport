const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  packageUid: { type: String, require: true },
  examineeId: { type: String },
  ans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
  ],
  mark: { type: String },
  show: { type: Boolean, default: false },
  rightans: { type: String },
  wrongans: { type: String },
});

module.exports=mongoose.model("Paper",userSchema)