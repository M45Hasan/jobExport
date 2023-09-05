import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const homeSectionTwo = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-10">
        Job Expert -এ পাচ্ছেন !
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-5 md:gap-0 mx-5">
        <Link
          to="dailyquiz"
          className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
        >
          <img
            src="https://i.ibb.co/b3ZVKsB/image-61.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">Daily Quiz</h3>
          <p className="text-center px-2">
            Live Exam, Archive, Routine, Syllabus, Merit List etc.
          </p>
        </Link>
        <Link
          to=""
          className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
        >
          <img
            src="https://i.ibb.co/d7jN865/image-62.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">ICT Expert</h3>
          <p className="text-center px-2">
            Live Exam, Archive, Routine, Syllabus, Merit List etc.
          </p>
        </Link>
        <Link
          to=""
          className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
        >
          <img
            src="https://i.ibb.co/qmD0fxB/image-63.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">
            job Preparation
          </h3>
          <p className="text-center px-2">
            Live Exam, Archive, Routine, Syllabus, Merit List etc.
          </p>
        </Link>
        <Link
          to="dictionary"
          className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
        >
          <img
            src="https://i.ibb.co/jfrpMXH/image-64.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">Vocabulary</h3>
          <p className="text-center px-2">
            Live Exam, Archive, Routine, Syllabus, Merit List etc.
          </p>
        </Link>
        <Link
          to=""
          className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
        >
          <img
            src="https://i.ibb.co/qmD0fxB/image-63.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">
            job Preparation
          </h3>
          <p className="text-center px-2">
            Live Exam, Archive, Routine, Syllabus, Merit List etc.
          </p>
        </Link>
        <Link
          to=""
          className="bg-[#EAE9E9] w-11/12 py-10 rounded-lg hover:bg-[#26A4DE] duration-500 hover:text-[#FFFFFF]"
        >
          <img
            src="https://i.ibb.co/b3ZVKsB/image-61.png"
            alt=""
            className="w-20 mx-auto"
          />
          <h3 className="text-center text-lg font-bold py-2">Daily Quiz</h3>
          <p className="text-center px-2">
            Live Exam, Archive, Routine, Syllabus, Merit List etc.
          </p>
        </Link>
      </section>
    </>
  );
};

export default homeSectionTwo;
