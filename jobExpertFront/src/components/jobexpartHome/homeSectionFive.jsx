import { useState, useEffect } from "react";

import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const homeSectionFive = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <h3 className="text-2xl text-center font-bold mb-10 mt-20">
        শিক্ষার্থীদের মতামত
      </h3>
      <Swiper
        className="mySwiper mx-16 pt-5"
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-11/12 py-10 rounded-lg duration-500 shadow-lg border-2 relative cursor-pointer group">
              <span className=" :">
                <Icon
                  icon="icon-park:quote"
                  width={40}
                  className="absolute -top-6  left-5"
                />
              </span>
              <p className="text-left px-5">{item.description}</p>
              <div className="flex items-center gap-4 px-5 pt-5">
                <img src={item.img} alt="" className="w-20 rounded-full" />
                <div>
                  <h3 className="text-center text-2xl font-bold pt-2">
                    {item.name}
                  </h3>
                  <p>{item.address}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default homeSectionFive;
