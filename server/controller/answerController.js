const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const ExamPackage = require("../model/examPackage");
const Exam = require("../model/examModel");
const Question = require("../model/questionModel");
const Answer = require("../model/ansModel");
const Paper = require("../model/examPaperModel");
const { mongo } = require("mongoose");

const createExamPaper = async (req, res) => {
  const { packageUid, std } = req.body;

  try {
    const user = await User.findById({ _id: std });

    const search = await ExamPackage.findOne({
      packageUid,
      packageBuyer: { $in: user._id },
    });

    if (search) {
      const mong = new Paper({
        packageUid,
        examineeId: user._id,
      });

      mong.save();

      res.status(200).send(mong);
    } else {
      res.status(404).json({ error: "Invalid Entry" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const createAnswer = async (req, res) => {
  const { packageUid, std, answer } = req.body;

  try {
    const search = await Paper.findOne({
      packageUid: packageUid,
      examineeId: std,
    });
    if (search) {
      const mong = new Answer({
        exampaperid: search.packageUid,
        examineeId: search.examineeId,
        answer,
      });

      mong.save();

      const mp = await Paper.findOneAndUpdate(
        { _id: search._id },
        { $push: { ans: mong._id } },
        { new: true }
      );
      res.status(200).send(mp);
    } else {
      res.status(404).json({ error: "Invalid Entrh" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
module.exports = { createExamPaper, createAnswer };
