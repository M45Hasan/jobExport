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

      await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { result: mong._id } },
        { new: true }
      );

      res.status(200).send(mong);
    } else {
      res.status(404).json({ error: "Invalid Entry" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const createAnswer = async (req, res) => {
  const { packageUid, std, answer, serial } = req.body;

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
        serial,
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

const calculateMarks = async (examTrack, examineeId, res) => {
  try {
    const answers = await Answer.find({ exampaperid: examTrack, examineeId });
    const use = await User.findOne({ _id: examineeId });

    let rightMarks = 0;
    let rightCount = 0;
    let wrongMarks = 0;
    let wrongCount = 0;

    for (const answer of answers) {
      const question = await Question.findOne({
        examTrack: examTrack,
        serial: answer.serial,
      });

      if (question) {
        if (answer.answer === question.rightAnsOne) {
          rightMarks += question.rightMark;
          rightCount += 1;
        } else {
          wrongMarks += question.wrongMark;
          wrongCount += 1;
        }
      }
    }
    const getMark = rightMarks - wrongMarks;
    const perMark = rightMarks / rightCount;

    const getPercentage = (rightCount / (rightCount + wrongCount)) * 100;
    const mx = await Paper.findOneAndUpdate(
      { examineeId },
      {
        $set: {
          mark: getMark,
          rightans: rightCount,
          wrongans: wrongCount,
          show: true,
          rightmark: rightMarks,
          wrongmark: wrongMarks,
          percentage: getPercentage,
        },
      },
      { new: true }
    );

    res.status(200).send(mx);
  } catch (error) {
    res.status(500).json({ error: error.code });
  }
};

const resultPulish = async (req, res) => {
  const { examTrack, examineeId } = req.body;
  calculateMarks(examTrack, examineeId, res);
};

module.exports = { createExamPaper, createAnswer, resultPulish };
