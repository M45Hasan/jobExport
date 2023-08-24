const express = require("express");
const app = express();
const Exam = require("../model/examModel");
const ExamPackage = require("../model/examPackage");

const examHeader = async (req, res) => {
  const { packageUid, examSerial, examTitle, examTime, examInfo, examMark } =
    req.body;

  try {
    const search = await ExamPackage.find({ packageUid });
    console.log("ami1");
    const examNew = new Exam({
      packageUid,
      examSerial,
      examTitle,
      examTime,
      examInfo,
      examMark,
    });

    examNew.save();
    //const searchx = await Question.find({ examSerial });
    //examQuestionList: searchx[0]._id;
    console.log(examNew._id, search[0]._id);
    const shr = await Exam.findOneAndUpdate(
      { _id: examNew._id },
      { $push: { packageId: search[0]._id } },
      { new: true }
    );

    // await ExamPackage.findOneAndUpdate(
    //   { packageUid: shr[0].packageUid },
    //   { $push: { examQuestionList: shr[0]._id } },
    //   { new: true }
    // );
    res.status(200).json(shr);
  } catch (error) {
    console.log(error.code);
    res.status(500).json({ error: "Error Occurs" });
  }
};

module.exports = {
  examHeader,
};
