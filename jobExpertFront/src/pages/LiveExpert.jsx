import Banner from "../components/Banner/Banner";
import ExamDropdown from "../components/ExamDropdown/ExamDropdown";
import { useState, useEffect } from "react";
import JobExpart from "../components/JobExpart/JobExpart";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import noexam from "../assets/brandLogo/noexam1.png";

import Button from "@mui/material/Button";
const LiveExpert = () => {
  const [datax, setData] = useState([]);
  const userData = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData?.userData?.userInfo?.verify) {
      navigate("/login");
    }
  }, []);

  const [todayExam, setTodTayExam] = useState("");

  async function reciveDataFromChild(data) {
    setTodTayExam(data);
    setNumQuestions(1);
  }

  const [numQuestions, setNumQuestions] = useState(1); // Number of questions to display
  const handleMoreQuestions = () => {
    setNumQuestions(numQuestions + 1); // Increase the number of questions by 10
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* banner section  */}
      <Banner />
      <div className="w-11/12 md:w-4/5 mx-auto pb-16">
        <div className="pl-4 md:pl-12 mt-16 mb-[64px]">
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

        {todayExam.length != 0
          ? todayExam.slice(0, numQuestions).map((item) => (
              <div className="flex md:flex-row flex-col mb-[20px] md:gap-x-[30px] items-center border border-[#000000] p-[5px] md:p-[20px]">
                <div className="md:w-[20%] w-[60%]">
                  <img
                    className="w-full "
                    src="https://i.ibb.co/vqbtXkJ/image-163.png"
                    alt=""
                  />
                </div>
                <div className=" w-[80%] p-[15px] md:p-[30px]">
                  <h2 className="text-[20px] md:text-[40px] font-semibold">
                    {item.packageName}
                  </h2>
                  <p className="md:text-[24px] text-[14px] my-[10px]">
                    {item.packageDetail}
                  </p>
                  <div className="flex md:flex-row flex-col gap-x-0 md:gap-x-10  justify-evenly md:justify-start items-start md:items-center">
                    <div>
                      <p className="md:text-[24px] text-[14px] ">
                        পরীক্ষা শুরুঃ {item.examDate}
                      </p>
                      <p className="md:text-[24px] text-[14px] ">
                        {" "}
                        পরীক্ষার সময়ঃ {item.examTime}
                      </p>
                      <p className="md:text-[24px] text-[14px] ">
                        Total Examinee : {item.packageBuyer.length}
                      </p>
                    </div>
                    <Link to={`examPaper/${item._id}`}>
                      <button className="bg-primary mx-auto mt-[10px] md:mt-0 text-[#FFFFFF] flex justify-center items-center py-3 gap-2 px-16 rounded-lg">
                        {item.premium == true ? (
                          <img
                            src="https://i.ibb.co/H7wjCk9/image-56.png"
                            alt=""
                            className="w-5"
                          />
                        ) : (
                          ""
                        )}
                        Start Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : show && (
              <>
                <h2 className="text-center text-xl font-bold mb-10">
                  NO Exams Avilable{" "}
                </h2>
                <img
                  className="block mx-auto text-center"
                  src={noexam}
                  alt="No Exams Available"
                />
              </>
            )}
      </div>
      {todayExam.length > 5 ? (
        <Button
          onClick={handleMoreQuestions}
          sx={{ textAlign: "center", display: "block", margin: "0 auto" }}
          variant="contained"
        >
          More Exam
        </Button>
      ) : (
        ""
      )}

      {/* job expart section  */}
      <JobExpart />
    </>
  );
};

export default LiveExpert;
