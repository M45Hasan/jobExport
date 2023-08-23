import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import logo from "../assets/brandLogo/logo.png";
import icon from "../assets/verificationIcon/verifiction.png";
import JobExpart from "../components/JobExpart/JobExpart";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const verify = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const completeVerificationCode = verificationCode.join("");
    console.log("Entered verification code: " + completeVerificationCode);

    setTimeout(() => {
      console.log("Verification complete!");
    }, 2000);
  };
  return (
    <>
      <Navbar />
      {/* banner section  */}
      <Banner />
      <div className="w-11/12 md:w-1/2 text-center mx-auto py-16">
        <p>
          Job Expert বাংলাদেশের প্রথম এবং সর্ববৃহৎ Virtual Exam Center (VEC)
          বিসিএস প্রিলিমিনারি এবং অন্যান্য MCQ পরীক্ষার প্রস্তুতির জন্য হাজারো
          পরীক্ষার্থীর সাথে চূড়ান্ত পরীক্ষার আগেই LIVE মডেল টেস্ট দিয়ে নিজের
          অবস্থান যাচাই করে নিন।
        </p>
        <img src={logo} alt="" className="mx-auto py-16" />
        <div className="flex flex-col justify-center">
          <h3>মোবাইল নাম্বার ভেরিফাই করুন</h3>
          <img src={icon} alt="" className="w-44 mx-auto mt-3" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="text-center">
        <div className="flex items-center justify-center ml-4">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="w-16 md:w-20 h-12 text-center text-xl border rounded-md mx-1 focus:outline-none"
              maxLength={1}
              pattern="[0-9]"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          ))}
        </div>
        <button
          type="submit"
          className="ml-4 px-24 md:px-28 py-2 bg-blue-500 text-white rounded bg-primary  focus:outline-none mt-10"
        >
          ভেরিফাই করুন
        </button>
      </form>
      {/* job expar section  */}
      <div className="mt-16">
        <JobExpart />
      </div>
      <Footer />
    </>
  );
};

export default verify;
