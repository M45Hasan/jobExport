import Banner from "../components/Banner/Banner";
import ExamDropdown from "../components/ExamDropdown/ExamDropdown";
import { useState, useEffect } from "react";
import JobExpart from "../components/JobExpart/JobExpart";
import axios from "../components/Axios/axios";
import homeimg from "../assets/brandLogo/liveexam.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LiveExpert = () => {
  const [datax, setData] = useState([]);
  const userData = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData?.userData?.userInfo?.verify) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    async function data() {
      let data = await axios.get("/jobExpert/api/v1/packagelist");
      if (data.data.length > 0) {
        console.log(data);
        setData(data.data);
      } else {
        setData(null);
      }
    }
    data();
  }, []);
  const reciveDataFromChild = (data) => {
    console.log("revicedata", data);
  };
  return (
    <>
      {/* banner section  */}
      <Banner />
      <div className="w-11/12 md:w-4/5 mx-auto pb-16">
        <div className="pl-4 md:pl-12">
          <ExamDropdown dataFromeChild={reciveDataFromChild} />
        </div>
        {/* section one */}
        {datax.map((item) => (
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
              <div className="flex md:flex-row flex-col  justify-evenly items-start md:items-center">
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* job expart section  */}
      <JobExpart />
    </>
  );
};

export default LiveExpert;
