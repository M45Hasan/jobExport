import { useEffect, useState } from "react";
import CountUp from "react-countup";

const homeSectionFour = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-10 mt-20">
        আমাদের সফলতা
      </h3>
      <section className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-5 md:gap-0 mx-5">
        <div className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF] cursor-pointer">
          <img
            src="https://i.ibb.co/zbQmQQ7/image-66.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">মোট সাব্জেক্ট</h3>
          <span className="flex justify-center font-bold text-lg">
            <CountUp end={28} duration={5} />+
          </span>
        </div>
        <div className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF] cursor-pointer">
          <img
            src="https://i.ibb.co/Jqryt5c/image-67.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">শিক্ষার্থী</h3>
          <span className="flex justify-center font-bold text-lg">
            <CountUp end={2800} duration={5} />+
          </span>
        </div>
        <div className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF] cursor-pointer">
          <img
            src="https://i.ibb.co/34qdQjt/image-68.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">সফল শিক্ষার্থী</h3>
          <span className="flex justify-center font-bold text-lg">
            <CountUp end={180} duration={5} />+
          </span>
        </div>
        <div className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF] cursor-pointer">
          <img
            src="https://i.ibb.co/zfrc12M/image-69.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">মেন্টর</h3>
          <span className="flex justify-center font-bold text-lg">
            <CountUp end={18} duration={5} />+
          </span>
        </div>
        <div className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF] cursor-pointer">
          <img
            src="https://i.ibb.co/FmZFFVq/image-70.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">সাফলতার বছর</h3>
          <span className="flex justify-center font-bold text-lg">
            <CountUp end={8} duration={5} />+
          </span>
        </div>
      </section>
    </>
  );
};

export default homeSectionFour;
