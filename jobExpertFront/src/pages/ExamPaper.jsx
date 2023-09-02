import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import axios from "../components/Axios/axios";
import { useSelector } from "react-redux";
const ExamPaper = () => {
  const { id } = useParams();
  console.log(id);
  const seletor = useSelector((state) => state);
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    async function fetchQuestions() {
      try {
        let response = await axios.post("/jobExpert/api/v1/whocanexam", {
          id: id,
          myId: seletor.userData.userInfo.id,
        });
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchQuestions();
  }, [id]);

  const halfLength = Math.ceil(data.qestionList?.length / 2);
  const firstHalf = data.qestionList?.slice(0, halfLength);
  const secondHalf = data.qestionList?.slice(halfLength);

  useEffect(async () => {
    try {
      let data = await axios.post("/jobExpert/api/v1/exampaper", {
        packageUid: id,
        std: seletor.userData.userInfo.id,
      });
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  // exampaper
  return (
    <div>
      <Banner />

      <div className="w-11/12 md:w-4/5 mx-auto text-left">
        {/* quiz question and answer section  */}
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold">{data.examSerial}</h1>
          <h3 className="my-3">{data.examTitle}</h3>
          <p>সময়-{data.examDuration} মিনিট</p>
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto text-left">
          {/* First Column */}
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
                            id={`question-option-${index}`}
                            name={`question-${index}`} // Use unique name for each question
                            checked
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index}`}>
                            {item.optionA}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${index + halfLength}`}
                          >
                            {item.optionB}
                          </label>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 2}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${
                              index + halfLength * 2
                            }`}
                          >
                            {item.optionC}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 3}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${
                              index + halfLength * 3
                            }`}
                          >
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

          {/* Second Column */}
          <div className="md:w-1/2 float-left">
            <ol>
              {secondHalf?.map((item, index) => (
                <>
                  <div
                    className={`w-11/12 md:w-4/5 mx-auto bg-white ml-2 rounded-lg my-4`}
                  >
                    <div className="flex">
                      <span className="inlinex mr-4">
                        {index + halfLength}.
                      </span>
                      <h1 className="text-xl font-bold mb-4">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.whatIsTheQuestion,
                          }}
                        ></div>
                      </h1>
                    </div>

                    <div className="flex items-center gap-x-4">
                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 4}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${
                              index + halfLength * 4
                            }`}
                          >
                            {item.optionA}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 5}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${
                              index + halfLength * 5
                            }`}
                          >
                            {item.optionB}
                          </label>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 6}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${
                              index + halfLength * 6
                            }`}
                          >
                            {item.optionC}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 7}`} // Calculate the correct index for the second column
                            name={`question-${index}`} // Use the same name for each question
                            checked
                            className="mr-2"
                          />
                          <label
                            htmlFor={`question-option-${
                              index + halfLength * 7
                            }`}
                          >
                            {item.optionD}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </ol>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div className="text-center my-10">
          <button className="px-10 py-2 mt-4 bg-primary text-[#FFFFFF] rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamPaper;
