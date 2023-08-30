import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const homeSectionThree = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-10 mt-20">
        Job Expert -সাকসেস স্টোরি
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-center mt-10 mx-5">
        <div className=" w-11/12 p-5 relative h-[500px] shadow-lg">
          <div className="absolute top-0 left-0 w-full h-[250px] bg-primary z-10"></div>
          <img
            src="https://i.ibb.co/TKRVgLS/image-95.png"
            className="w-[55%] mx-auto rounded-full absolute z-30 left-0 mt-5 right-0 flex justify-center"
            alt="..."
          />
          <div className="p-4 text-center absolute bottom-0 left-0 bg-secondary w-full rounded-t-[70px] h-[300px] z-20">
            <div className="mt-14">
              <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                Sabbir Hasan
              </h5>
              <p>UI/UX Designer</p>
              <p>Xyz Company Ltd.</p>
              <p>Dhaka, Bangladesh</p>
              <div className="flex justify-center items-center gap-2 my-4">
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ic:baseline-facebook" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:twitter" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:instagram" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ri:linkedin-fill" width={25} />
                </a>
              </div>
              <button className="bg-primary text-[#FFFFFF] px-4 py-2 rounded-lg my-3 transition duration-500 ease-in-out hover:scale-105">
                আরও দেখুন
              </button>
            </div>
          </div>
        </div>
        <div className=" w-11/12 p-5 relative h-[500px] shadow-lg">
          <div className="absolute top-0 left-0 w-full h-[250px] bg-primary z-10"></div>
          <img
            src="https://i.ibb.co/ww4kHY7/image-96.png"
            className="w-[55%] mx-auto rounded-full absolute z-30 left-0 mt-5 right-0 flex justify-center"
            alt="..."
          />
          <div className="p-4 text-center absolute bottom-0 left-0 bg-secondary w-full rounded-t-[70px] h-[300px] z-20">
            <div className="mt-14">
              <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                Reduanul Riyad
              </h5>
              <p>UI/UX Designer</p>
              <p>Xyz Company Ltd.</p>
              <p>Dhaka, Bangladesh</p>
              <div className="flex justify-center items-center gap-2 my-4">
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ic:baseline-facebook" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:twitter" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:instagram" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ri:linkedin-fill" width={25} />
                </a>
              </div>
              <button className="bg-primary text-[#FFFFFF] px-4 py-2 rounded-lg my-3 transition duration-500 ease-in-out hover:scale-105">
                আরও দেখুন
              </button>
            </div>
          </div>
        </div>
        <div className=" w-11/12 p-5 relative h-[500px] shadow-lg">
          <div className="absolute top-0 left-0 w-full h-[250px] bg-primary z-10"></div>
          <img
            src="https://i.ibb.co/z5hSDwY/image-97.png"
            className="w-[55%] mx-auto rounded-full absolute z-30 left-0 mt-5 right-0 flex justify-center"
            alt="..."
          />
          <div className="p-4 text-center absolute bottom-0 left-0 bg-secondary w-full rounded-t-[70px] h-[300px] z-20">
            <div className="mt-14">
              <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                Akash
              </h5>
              <p>UI/UX Designer</p>
              <p>Xyz Company Ltd.</p>
              <p>Dhaka, Bangladesh</p>
              <div className="flex justify-center items-center gap-2 my-4">
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ic:baseline-facebook" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:twitter" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:instagram" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ri:linkedin-fill" width={25} />
                </a>
              </div>
              <button className="bg-primary text-[#FFFFFF] px-4 py-2 rounded-lg my-3 transition duration-500 ease-in-out hover:scale-105">
                আরও দেখুন
              </button>
            </div>
          </div>
        </div>
        <div className=" w-11/12 p-5 relative h-[500px] shadow-lg">
          <div className="absolute top-0 left-0 w-full h-[250px] bg-primary z-10"></div>
          <img
            src="https://i.ibb.co/K7THnpt/image-98.png"
            className="w-[55%] mx-auto rounded-full absolute z-30 left-0 mt-5 right-0 flex justify-center"
            alt="..."
          />
          <div className="p-4 text-center absolute bottom-0 left-0 bg-secondary w-full rounded-t-[70px] h-[300px] z-20">
            <div className="mt-14">
              <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                Mehedi
              </h5>
              <p>UI/UX Designer</p>
              <p>Xyz Company Ltd.</p>
              <p>Dhaka, Bangladesh</p>
              <div className="flex justify-center items-center gap-2 my-4">
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ic:baseline-facebook" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:twitter" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="mdi:instagram" width={25} />
                </a>
                <a
                  href=""
                  className="hover:-translate-y-1 duration-300 hover:text-primary"
                >
                  <Icon icon="ri:linkedin-fill" width={25} />
                </a>
              </div>
              <button className="bg-primary text-[#FFFFFF] px-4 py-2 rounded-lg my-3 transition duration-500 ease-in-out hover:scale-105">
                আরও দেখুন
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default homeSectionThree;
