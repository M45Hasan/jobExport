const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const User = require("../../server/model/userModel");

const imageUp = async (req, res) => {
  const {  id } = req.body;


  try {
    upload.single("avatar")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: "File upload error" });
      }

      
      const avatar = req.file ? req.file.filename : null;
      if (avatar) {
        const search = await User.findOneAndUpdate(
          { _id: id },
          { $push: { avatar: avatar } },
          { new: true }
        );
        res.status(200).json({ message: "Upload", avatar: search.avatar });
      } else {
        res.status(400).json({ error: "Fail" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", reason: error.message });
  }
};

module.exports = imageUp;
