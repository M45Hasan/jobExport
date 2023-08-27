import { useEffect, useState } from "react";
import CountUp from "react-countup";

const homeSectionFour = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-10 mt-20">
        আমাদের সফলতা
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-5 md:gap-0 mx-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF] cursor-pointer"
          >
            <img src={item.icon} alt="" className="w-20 mx-auto" />
            <h3 className="text-center text-lg font-bold py-2">{item.title}</h3>
            <span className="flex justify-center font-bold text-lg">
              <CountUp end={item.total} duration={5} />+
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default homeSectionFour;
