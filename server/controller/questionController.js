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
    nid,
  } = req.body;

  try {
    const saerch = await Exam.find({ examSerial, nid });
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
      const crtQ = await Question.findOneAndUpdate(
        { _id: newQuestion._id },
        { $push: { examId: saerch[0]._id } }
      );
      res.status(201).json(crtQ);
    } else {
      res.status(401).json({ error: "Already" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const deleteQuestion = async (req, res) => {
  const { id } = req.body;

  console.log(id);
  try {
    const mx = await Question.find({ _id: id });
    console.log(mx[0].examTrack);

    await Exam.findOneAndUpdate(
      { examSerial: mx[0].examTrack },
      { $pull: { qestionList: { $in: mx[0]._id } } },
      { new: true }
    );
    await Question.findOneAndDelete({ _id: mx[0]._id });
    res.status(202).json({ message: "Delete Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};


module.exports = {
  createQuestion,
  deleteQuestion,
  
};
