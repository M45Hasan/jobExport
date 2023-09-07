import { Button } from "@mui/material";
import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import ExamDropdown from "../components/ExamDropdown/ExamDropdown";
import pdf from "../assets/brandLogo/pdf.png";
const PdfSupport = () => {
  const [todayExam, setTodTayExam] = useState("");

  async function reciveDataFromChild(data) {
    setTodTayExam(data);
  }
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <div className="my-10">
          <ExamDropdown
            titel={"পরিক্ষাঃ"}
            dataFromeChild={reciveDataFromChild}
            models={(selectedOption) => {
              // Do something with the selectedOption
              // For example, you can log it to the console
              console.log(selectedOption);
            }}
          />
        </div>
        <div className="flex rounded-lg p-6 justify-around items-center bg-[#EAE9E9]">
          <div>
            <img src={pdf} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold ">
              ৪৩ তম বিসিএস সিলেবাস-৭ পরীক্ষা{" "}
            </h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <h2 className="text-[24px] font-bold">
              Uploaded Date : 27 July 2023
            </h2>
          </div>
          <div>
            <Button variant="contained">Download Pdf</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfSupport;
