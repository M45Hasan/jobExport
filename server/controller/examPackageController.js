const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const ExamPackage = require("../model/examPackage");

const packageCreateController = async (req, res) => {
  const {
    packageName,
    packageDetail,
    packageCreaterEmail,
    packageFee,
    premium,
    examCategory,
    examSubCategory,
    examDate,
    examTime,
  } = req.body;
  try {
    let search = await User.find({
      email: packageCreaterEmail,
      role: "Teacher",
    });
    console.log(search);
    if (search.length != 0) {
      const uid = Math.floor(100000 + Math.random() * 90000).toString();
      const createPackage = new ExamPackage({
        packageName,
        packageDetail,
        packageUid: uid,
        packageCreaterEmail,
        packageFee,
        premium,
        examCategory,
        examSubCategory,
        examDate,
        examTime,
      });
      createPackage.save();

      await User.findOneAndUpdate(
        { email: packageCreaterEmail },
        { $push: { examPackageId: createPackage._id } }
      );
      await ExamPackage.findOneAndUpdate(
        { packageCreaterEmail },
        { $push: { packageCreater: search._id } }
      );

      res.status(200).send(createPackage);
    }
  } catch (error) {
    console.log(error.code);
    res.status(500).json({ error: "An error occurred" });
  }
};

const myPackage = async (req, res) => {
  const { email } = req.body;
  try {
    const search = await User.find({ email, role: "Teacher" }).populate(
      "examPackageId"
    );
    if (search.length != 0) {
      res.status(200).json(search);
    } else {
      res.status(400).json({ error: "NO Exam Package " });
    }
  } catch (error) {
    console.log(error.code);
    res.status(500).json({ error: "An error occurred" });
  }
};

const allPackage = async (req, res) => {
  try {
    const search = await ExamPackage.find();
    res.status(200).json(search);
  } catch (error) {
    console.log(error.code);
    res.status(500).json({ error: "An error occurred" });
  }
};
const myExamList = async (req, res) => {
  const { email } = req.body;
  try {
    const search = await User.find({ email, role: "Student" }).populate(
      "myExam"
    );

    if (search.length != 0) {
      res.status(200).json(search);
    } else {
      res.status(400).json({
        error: "NO Exam Collection",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error Occurs" });
  }
};

const packageBuyer = async (req, res) => {
  const { packageUid, email } = req.body;
  try {
    const search = await ExamPackage.find({ packageUid });
    const searchUser = await User.find({ email, role: "Student" });
    console.log(searchUser[0]._id);
    if (search.length != 0 && searchUser.length != 0) {
      await ExamPackage.findOneAndUpdate(
        { packageUid },
        { $push: { packageBuyer: searchUser[0]._id } }
      );
      await User.findOneAndUpdate(
        { email:searchUser[0].email },
        { $push: { myExam: search[0]._id } }
      );
      res.status(200).json({ message: "Purchase  success" });
    } else {
      res.status(400).json({ error: "Fail purchase " });
    }
  } catch (error) {
    res.status(500).json({ error: "Error Occurs" });
  }
};

module.exports = {
  packageCreateController,
  myPackage,
  allPackage,
  myExamList,
  packageBuyer,
};
