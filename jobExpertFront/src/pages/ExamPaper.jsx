import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import axios from "../components/Axios/axios";
import { useSelector } from "react-redux";

const ExamPaper = () => {
  const { id } = useParams();
  const seletor = useSelector((state) => state);
  const [data, setData] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  console.log(selectedOptions)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        let response = await axios.post("/jobExpert/api/v1/whocanexam", {
          id: id,
          myId: seletor.userData.userInfo.id,
        });
        setData(response.data);
        // Initialize selectedOptions with empty values for each question
        const initialSelectedOptions = {};
        response.data.qestionList?.forEach((item, index) => {
          initialSelectedOptions[`question-${index}`] = "";
        });
        setSelectedOptions(initialSelectedOptions);
      } catch (e) {
        console.log(e);
      }
    }
    fetchQuestions();
  }, [id, seletor.userData.userInfo.id]);

  // create paper start *********
  const [paper, setPaper] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const pushData = await axios.post("/jobExpert/api/v1/exampaper", {
          std: seletor.userData.userInfo.id,
          packageUid: data.packageUid,
        });

        setPaper(pushData.data); 
      } catch (error) {
        console.error("Error:", error); 
      }
    }

    fetchData();
  }, [seletor.userData.userInfo.id, data.packageUid]);

  
   // create paper end *********
  const halfLength = Math.ceil(data.qestionList?.length / 2);
  const firstHalf = data.qestionList?.slice(0, halfLength);
  const secondHalf = data.qestionList?.slice(halfLength);

  // Handle radio button change
  
  const [optn , setOptn]=useState({})
  const handleRadioChange = (event, questionIndex) => {
    const { name, value } = event.target;
    setOptn( {
     ...optn,[name]: value,
  }); 
  };
const handeleStore =async (puid)=>{
  

  await axios.post("/jobExpert/api/v1/examinee-paper-push",{...{puid: puid,id:seletor.userData.userInfo.id},optn}).then(()=>{
    setOptn({})
  })

  

}

  return (
    <div>
      <Banner />

      <div className="w-11/12 md:w-4/5 mx-auto text-left">
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
                            checked={selectedOptions[`question-${index}`] === "optionA"}
                            onChange={(e) => handleRadioChange(e, index)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index}-A`}>
                            {item.optionA}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index}-B`}
                            name={`question-${index}`}
                            value="optionB"
                            checked={selectedOptions[`question-${index}`] === "optionB"}
                            onChange={(e) => handleRadioChange(e, index)}
                            className="mr-2"
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
                            id={`question-option-${index}-C`}
                            name={`question-${index}`}
                            value="optionC"
                            checked={selectedOptions[`question-${index}`] === "optionC"}
                            onChange={(e) => handleRadioChange(e, index)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index}-C`}>
                            {item.optionC}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index}-D`}
                            name={`question-${index}`}
                            value="optionD"
                            checked={selectedOptions[`question-${index}`] === "optionD"}
                            onChange={(e) => handleRadioChange(e, index)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index}-D`}>
                            {item.optionD}
                          </label>
                        </div>
                      </div>
                    </div>option
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="md:w-1/2 float-left">
            <ol>
              {secondHalf?.map((item, index) => (
                <span className="inlinex" key={index + halfLength}>
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
                            id={`question-option-${index + halfLength * 4}-A`}
                            name={`question-${index + halfLength}`}
                            value="optionA"
                            checked={selectedOptions[`question-${index + halfLength}`] === "optionA"}
                            onChange={(e) => handleRadioChange(e, index + halfLength)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index + halfLength * 4}-A`}>
                            {item.optionA}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 4}-B`}
                            name={`question-${index + halfLength}`}
                            value="optionB"
                            checked={selectedOptions[`question-${index + halfLength}`] === "optionB"}
                            onChange={(e) => handleRadioChange(e, index + halfLength)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index + halfLength * 4}-B`}>
                            {item.optionB}
                          </label>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 4}-C`}
                            name={`question-${index + halfLength}`}
                            value="optionC"
                            checked={selectedOptions[`question-${index + halfLength}`] === "optionC"}
                            onChange={(e) => handleRadioChange(e, index + halfLength)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index + halfLength * 4}-C`}>
                            {item.optionC}
                          </label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="radio"
                            id={`question-option-${index + halfLength * 4}-D`}
                            name={`question-${index + halfLength}`}
                            value="optionD"
                            checked={selectedOptions[`question-${index + halfLength}`] === "optionD"}
                            onChange={(e) => handleRadioChange(e, index + halfLength)}
                            className="mr-2"
                          />
                          <label htmlFor={`question-option-${index + halfLength * 4}-D`}>
                            {item.optionD}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              ))}
            </ol>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div onClick={()=>handeleStore(data.packageUid)} className="text-center my-10">
          <button className="px-10 py-2 mt-4 bg-primary text-[#FFFFFF] rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamPaper;
