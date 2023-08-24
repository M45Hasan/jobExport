const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const userQuestion = new Schema({

})

module.exports=mongoose.model("Question",userQuestion)