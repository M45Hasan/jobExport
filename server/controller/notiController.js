const express = require("express");
const app = express();

const Notification = require("../model/notiModel");

const getNoti = async (req, res) => {
  try {
    const noti = await Notification.find();

    if (noti.length !== 0) {
      res.status(404).json({ error: "No Notification" });
    } else {
      res.status(200).send(noti);
    }
  } catch (error) {
    res.status(500).json({ error: error.cdoe });
  }
};

module.exports = getNoti;
