const express = require("express");
const _ = express.Router();
const path = require("path");
const app = express();

const {
  regiController,
  verifyEmailController,
  userDelete,
  allUser,
} = require("../../controller/regsitrationController");
const {
  logController,
  resetOtpSendController,
  resetOtpMatchController,
} = require("../../controller/loginController");
const {
  packageCreateController,
  myPackage,
  allPackage,
  myExamList,
  packageBuyer,
  totalExaminee,
  packageTimer,
  packageStatus,
  packageRepost,
  packageDelete,
  categoryWiseTodayExam,
  selectExamByUser,
} = require("../../controller/examPackageController");

// const { examCreate, deleteExam } = require("../../controller/examController");
const {
  createQuestion,
  deleteQuestion,
  packageQuestionList,
  whoCanExam,
} = require("../../controller/questionController");

const {
  responseSSL,
  sslRequest,
  sslSuccess,
  sslNotifiaction,
  sslfail,
  sslCancel,
} = require("../../controller/paymentController");

const imageUp = require("../../controller/imageController");
_.post("/imgupload", imageUp);

//exampaper
const {createExamPaper,createAnswer} = require("../../controller/answerController");
_.post("/exampaper", createExamPaper);
_.post("/answer", createAnswer);

//regi api
_.post("/regi", regiController);
_.post("/emailverification", verifyEmailController);
_.post("/deleteuser", userDelete);
_.post("/deleteuser", userDelete);
_.get("/alluser", allUser);

//password api
_.post("/login", logController);
_.post("/resetsent", resetOtpSendController);
_.post("/resetmatch", resetOtpMatchController);

// package api
_.post("/packagecreate", packageCreateController);
_.post("/mypackage", myPackage);
_.post("/exampurchase", packageBuyer);
_.get("/packagelist", allPackage);
_.post("/myexamlist", myExamList);
_.post("/totalexaminee", totalExaminee);
_.post("/timer", packageTimer);
_.post("/packagestatus", packageStatus);
_.post("/packagerepost", packageRepost);
_.post("/packagedelete", packageDelete);
_.post("/categorywise", categoryWiseTodayExam);
_.post("/examtopaper/:id", selectExamByUser);

//exam question Header api
// _.post("/examheader", examCreate);
// _.post("/deleteexam", deleteExam);

//exam question Body api
_.post("/questioncreate", createQuestion);
_.post("/deletequestion", deleteQuestion);
_.post("/examquestion", packageQuestionList);
_.post("/whocanexam", whoCanExam);

// paymentgateway

_.get("/ssl", responseSSL);
_.post("/ssl-request", sslRequest);
_.post("/ssl-payment-success", sslSuccess);
_.post("/ssl-payment-notification", sslNotifiaction);
_.post("/ssl-payment-fail", sslfail);
_.post("/ssl-payment-cancel", sslCancel);

module.exports = _;
