const express = require("express");
const _ = express.Router();

const path = require("path");
const app = express();

const {
  regiController,
  verifyEmailController,
} = require("../../controller/regsitrationController");
const {
  logController,
  resetOtpSendController,
  resetOtpMatchController,
} = require("../../controller/loginController");

_.post("/regi", regiController);

_.post("/emailverification", verifyEmailController);
_.post("/login", logController);
_.post("/resetsent", resetOtpSendController);
_.post("/resetmatch", resetOtpMatchController);

module.exports = _;
