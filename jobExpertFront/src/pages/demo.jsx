import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import axios from "../components/Axios/axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import veifysucces from "../assets/verificationIcon/verifysuccess.png";

const ExamPaper = () => {
  // ... (rest of your code)

  // CSS style to change the radio button color when selected
  const radioStyle = {
    backgroundColor: "#yourSelectedColor", // Replace with the color you want
  };

  // ... (rest of your code)

  return (
    <div>
      <Banner />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="w-11/12 md:w-4/5 mx-auto text-left">
        {show ? (
          // ... (rest of your code)
        ) : (
          <>
            <div className="text-center my-10">
              <h1 className="text-2xl font-bold">{data.examSerial}</h1>
              <h3 className="my-3">{data.examTitle}</h3>
              <p>সময়-{data.examDuration} মিনিট</p>
            </div>
            <div className="w-11/12 md:w-4/5 mx-auto text-left">
              <div className="md:w-1/2 float-left">
                <ol>
                  {firstHalf?.map((item, index) => (
                    <li key={index}>
                      <div
                        className={`w-11/12 md:w-4/5 mx-auto bg-white ml-2 rounded-lg my-4`}
                      >
                        <h1 className="text-xl font-bold mb-4">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.whatIsTheQuestion,
                            }}
                          ></div>
                        </h1>
                        <div className="flex items-center gap-x-4">
                          <div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={`question-option-${index}-optionA`}
                                name={`question-${index}`}
                                value="optionA"
                                checked={
                                  selectedOptions[`question-${index}`] ===
                                  "optionA"
                                }
                                onChange={(e) => handleRadioChange(e, index)}
                                className="mr-2"
                                style={
                                  selectedOptions[`question-${index}`] ===
                                  "optionA"
                                    ? radioStyle
                                    : {}
                                }
                              />
                              <label htmlFor={`question-option-${index}-A`}>
                                {item.optionA}
                              </label>
                            </div>
                            <div className="flex items-center mt-2">
                              <input
                                type="radio"
                                id={`question-option-${index}-optionB`}
                                name={`question-${index}`}
                                value="optionB"
                                checked={
                                  selectedOptions[`question-${index}`] ===
                                  "optionB"
                                }
                                onChange={(e) => handleRadioChange(e, index)}
                                className="mr-2"
                                style={
                                  selectedOptions[`question-${index}`] ===
                                  "optionB"
                                    ? radioStyle
                                    : {}
                                }
                              />
                              <label htmlFor={`question-option-${index}-B`}>
                                {item.optionB}
                              </label>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={`question-option-${index}-optionC`}
                                name={`question-${index}`}
                                value="optionC"
                                checked={
                                  selectedOptions[`question-${index}`] ===
                                  "optionC"
                                }
                                onChange={(e) => handleRadioChange(e, index)}
                                className="mr-2"
                                style={
                                  selectedOptions[`question-${index}`] ===
                                  "optionC"
                                    ? radioStyle
                                    : {}
                                }
                              />
                              <label htmlFor={`question-option-${index}-C`}>
                                {item.optionC}
                              </label>
                            </div>
                            <div className="flex items-center mt-2">
                              <input
                                type="radio"
                                id={`question-option-${index}-optionD`}
                                name={`question-${index}`}
                                value="optionD"
                                checked={
                                  selectedOptions[`question-${index}`] ===
                                  "optionD"
                                }
                                onChange={(e) => handleRadioChange(e, index)}
                                className="mr-2"
                                style={
                                  selectedOptions[`question-${index}`] ===
                                  "optionD"
                                    ? radioStyle
                                    : {}
                                }
                              />
                              <label htmlFor={`question-option-${index}-D`}>
                                {item.optionD}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            {paper.error ? (
              // ... (rest of your code)
            ) : (
              <div
                onClick={() => handeleStore(data.packageUid)}
                className="text-center my-10"
              >
                <button className="px-10 py-2 mt-4 bg-primary text-[#FFFFFF] rounded-lg">
                  Submit
                </button>
              </div>
            )}
         
        )}
      </div>
    </div>
  );
};

export default ExamPaper;
