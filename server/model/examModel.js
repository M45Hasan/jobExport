const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const userExam = new Schema({

    packageUid:{type:String},
    packageId:{ type:Schema.Types.ObjectId,ref:"ExamPackage"},
    examSerial:{type:String,require:true,unique:true},
    examTitle:{type:String,require:true},
    examTime:{type:String,require:true},
    examInfo:{type:String},
    examMark:{type:String},
    examQuestionList:[
        {
            type:Schema.Types.ObjectId,ref:"Question"
        }
    ],



})

module.exports=mongoose.model("Exam",userExam)