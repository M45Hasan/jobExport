const express = require("express");
const router = express.Router();
const multer = require("multer");
const path=require("path")
const User = require("../../server/model/userModel");

// Create a multer storage configuration
const storage = multer.diskStorage({
  destination: "uploads/", // Destination folder for uploaded files
  filename: (req, file, cb) => {
    // Customize the filename as needed
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/imgupload", upload.single("avatar"), async (req, res) => {
  const { email } = req.body;
  const avatar = req.file ? req.file.filename : null;

  try {
    if (avatar) {
      const search = await User.findOneAndUpdate(
        { email: email },
        { $push: { avatar: avatar } },
        { new: true }
      );
      res.status(200).json({ message: "Upload", avatar: search.avatar });
    } else {
      res.status(400).json({ error: "Fail" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error", reason: error.message });
  }
});

module.exports = router;

