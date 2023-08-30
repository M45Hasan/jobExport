import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import axios from "../components/Axios/axios";
const ExamPaper = () => {
  const { id } = useParams();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        let response = await axios.post(`/jobExpert/api/v1/examtopaper/${id}`);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchQuestions();
  }, [id]);
  return (
    <div>
      {/* banner seciton  */}
      <Banner />

      <div className="w-11/12 md:w-4/5 mx-auto text-left">
        {/* quiz question and answer section  */}
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold">মডেল টেস্ট-১২০০১</h1>
          <h3 className="my-3">
            বিসিএস প্রিলিনিয়াম-২০২৩ নৈবিত্তিক প্রশ্নের উত্তর
          </h3>
          <p>সময়-৩০ মিনিট</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  items-center ">
          <ol>
            <li>
              <div
                className={`w-11/12 md:w-4/5 mx-auto bg-white ml-2 rounded-lg my-4`}
              >
                <h1 className="text-xl font-bold mb-4">
                  উত্তোলন কোন শ্রেণির হিসাব?
                </h1>
                <div className=" flex items-center gap-x-4">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(ক) মালিনাস্বত্ব</label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(খ) চালান</label>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(গ) সম্পদ হিসাব</label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(ঘ) বিলম্বিত</label>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div
                className={`w-11/12 md:w-4/5 mx-auto bg-white ml-2 rounded-lg my-4`}
              >
                <h1 className="text-xl font-bold mb-4">
                  উত্তোলন কোন শ্রেণির হিসাব?
                </h1>
                <div className=" flex items-center gap-x-4">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(ক) মালিনাস্বত্ব</label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(খ) চালান</label>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(গ) সম্পদ হিসাব</label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id={`question-option`}
                        name={`question`} // Use the same name for each question
                        checked
                        className="mr-2"
                      />
                      <label>(ঘ) বিলম্বিত</label>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="text-center my-10">
          <button className="px-10 py-2 mt-4 bg-primary text-[#FFFFFF] rounded-lg">
            Submit
          </button>
        </div>

        {/* <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md my-4">
            <h1 className="text-xl font-bold mb-4">Quiz Results</h1>
            <div>
              {data.map((quiz, index) => (
                <div
                  key={index}
                  className={`p-2 ${getAnswerStatus(
                    quiz.question,
                    selectedOptions[quiz.question] || ""
                  )}`}
                >
                  <p className="mb-2">{quiz.question}</p>
                  <p>Selected Answer: {selectedOptions[quiz.question]}</p>
                  <p>Explanation: {quiz.explain}</p>
                  {quiz.options.map((option, optionIndex) => (
                    <p
                      key={optionIndex}
                      className={`pl-4 ${
                        option.correct ? "text-[#008000] font-bold" : ""
                      }`}
                    >
                      {option.option}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ExamPaper;
