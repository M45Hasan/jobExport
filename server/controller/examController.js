const express = require("express");
const app = express();
const Exam = require("../model/examModel");
const ExamPackage = require("../model/examPackage");

const examHeader = async (req, res) => {
  const { packageUid, examTitle, examTime, examSerial, examInfo, examMark } =
    req.body;

  try {
    const sea = await Exam.find({
      examSerial: examSerial,
      packageUid: `PK-${packageUid}`,
    });

    console.log(sea.length);
    if (sea.length == 0) {
      const search = await ExamPackage.find({
        packageUid: packageUid,
      });

      const examNew = new Exam({
        packageUid: `PK-${packageUid}`,
        examSerial,
        examTitle,
        examTime,
        examInfo,
        examMark,
      });

      examNew.save();

      console.log(examNew._id, search[0]._id);

      const shrx = await Exam.findOneAndUpdate(
        { _id: examNew._id },
        { $push: { packageId: search[0]._id } },
        { new: true }
      );

      await ExamPackage.findOneAndUpdate(
        { _id: search[0]._id },
        { $push: { examList: examNew._id } },
        { new: true }
      );

      res.status(200).json(shrx);
    } else {
      res.status(402).json({ error: "Exam Name already Existed " });
    }
  } catch (error) {
    console.log(error.code);
    res.status(500).json({ error: "Error Occurs" });
  }
};

module.exports = {
  examHeader,
};
