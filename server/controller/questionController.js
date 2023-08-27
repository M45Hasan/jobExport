const express = require("express");
const app = express();
const Exam = require("../model/examModel");
const ExamPackage = require("../model/examPackage");
const Question = require("../model/questionModel");

const createQuestion = async (req, res) => {
  const {
    whatIsTheQuestion,
    optionA,
    optionB,
    optionC,
    optionD,
    rightAnsOne,
    rightAnsTwo,
    ansDetail,
    rightMark,
    wrongMark,
    examSerial,
  } = req.body;

  try {
    const saerch = await Exam.find({ examSerial });
    if (saerch.length != 0) {
      const newQuestion = new Question({
        examTrack: examSerial,
        whatIsTheQuestion,
        optionA,
        optionB,
        optionC,
        optionD,
        rightAnsOne,
        rightAnsTwo,
        ansDetail,
        rightMark,
        wrongMark,
      });
      newQuestion.save();
      await Exam.findByIdAndUpdate(
        { _id: saerch[0]._id },
        { $push: { qestionList: newQuestion._id } },
        { new: true }
      );
      await Question.findOneAndUpdate(
        { _id: newQuestion._id },
        { $push: { examId: saerch[0]._id } }
      );
      res.status(201).json(newQuestion);
    } else {
      res.status(401).json({ error: "Already" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  createQuestion,
};
