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
        {data.map((item, index) => (
          <div
            className=" w-11/12 p-5 relative h-[430px] shadow-lg"
            key={index}
          >
            <div className="absolute top-0 left-0 w-full h-[250px] bg-primary z-10"></div>
            <img
              src={item.img}
              className="w-[55%] mx-auto rounded-full absolute z-30 left-0 mt-5 right-0 flex justify-center"
              alt="..."
            />
            <div className="p-4 text-center absolute bottom-0 left-0 bg-secondary w-full rounded-t-[70px] h-[300px] z-20">
              <div className="mt-14">
                <h5 className="text-lg font-bold tracking-widest mb-2 uppercase">
                  {item.name}
                </h5>
                <p>{item.role}</p>
                <p>{item.company}</p>
                <p>{item.location}</p>
                <div className="flex justify-center items-center gap-2 my-4">
                  <a
                    href={item.socialMedia.facebook}
                    className="hover:-translate-y-1 duration-300 hover:text-primary"
                  >
                    <Icon icon="ic:baseline-facebook" width={25} />
                  </a>
                  <a
                    href={item.socialMedia.twitter}
                    className="hover:-translate-y-1 duration-300 hover:text-primary"
                  >
                    <Icon icon="mdi:twitter" width={25} />
                  </a>
                  <a
                    href={item.socialMedia.instagram}
                    className="hover:-translate-y-1 duration-300 hover:text-primary"
                  >
                    <Icon icon="mdi:instagram" width={25} />
                  </a>
                  <a
                    href={item.socialMedia.linkedin}
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
        ))}
      </section>
    </>
  );
};

export default homeSectionThree;
