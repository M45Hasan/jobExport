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
        <SwiperSlide>
          <div className="w-11/12 py-10 rounded-lg duration-500 shadow-lg border-2 relative cursor-pointer group">
            <span className=" :">
              <Icon
                icon="icon-park:quote"
                width={40}
                className="absolute -top-6  left-5"
              />
            </span>
            <p className="text-left px-5">
              ফলাবর্তন যা কোনো বিষয়ের উপর আলোচনা কিংবা সমালোচনা কিংবা কোন অবস্থা
              সম্পর্কে সার্বিক মন্তব্য। যাকে প্রদান করা হয় তিনি তাঁর কাজের মান
              সম্পর্কে ধারনা অর্জন করতে পারেন ফলাবর্তন বা Feedback এর মাধ্যমে।
            </p>
            <div className="flex items-center gap-4 px-5 pt-5">
              <img
                src="https://i.ibb.co/ww4kHY7/image-96.png"
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h3 className="text-center text-2xl font-bold pt-2">
                  Reduanul Riyad
                </h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-11/12 py-10 rounded-lg duration-500 shadow-lg border-2 relative cursor-pointer group">
            <span className=" :">
              <Icon
                icon="icon-park:quote"
                width={40}
                className="absolute -top-6  left-5"
              />
            </span>
            <p className="text-left px-5">
              ফলাবর্তন যা কোনো বিষয়ের উপর আলোচনা কিংবা সমালোচনা কিংবা কোন অবস্থা
              সম্পর্কে সার্বিক মন্তব্য। যাকে প্রদান করা হয় তিনি তাঁর কাজের মান
              সম্পর্কে ধারনা অর্জন করতে পারেন ফলাবর্তন বা Feedback এর মাধ্যমে।
            </p>
            <div className="flex items-center gap-4 px-5 pt-5">
              <img
                src="https://i.ibb.co/z5hSDwY/image-97.png"
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h3 className="text-center text-2xl font-bold pt-2">
                  Reduanul Riyad
                </h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-11/12 py-10 rounded-lg duration-500 shadow-lg border-2 relative cursor-pointer group">
            <span className=" :">
              <Icon
                icon="icon-park:quote"
                width={40}
                className="absolute -top-6  left-5"
              />
            </span>
            <p className="text-left px-5">
              ফলাবর্তন যা কোনো বিষয়ের উপর আলোচনা কিংবা সমালোচনা কিংবা কোন অবস্থা
              সম্পর্কে সার্বিক মন্তব্য। যাকে প্রদান করা হয় তিনি তাঁর কাজের মান
              সম্পর্কে ধারনা অর্জন করতে পারেন ফলাবর্তন বা Feedback এর মাধ্যমে।
            </p>
            <div className="flex items-center gap-4 px-5 pt-5">
              <img
                src="https://i.ibb.co/z5hSDwY/image-97.png"
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h3 className="text-center text-2xl font-bold pt-2">
                  Reduanul Riyad
                </h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-11/12 py-10 rounded-lg duration-500 shadow-lg border-2 relative cursor-pointer group">
            <span className=" :">
              <Icon
                icon="icon-park:quote"
                width={40}
                className="absolute -top-6  left-5"
              />
            </span>
            <p className="text-left px-5">
              ফলাবর্তন যা কোনো বিষয়ের উপর আলোচনা কিংবা সমালোচনা কিংবা কোন অবস্থা
              সম্পর্কে সার্বিক মন্তব্য। যাকে প্রদান করা হয় তিনি তাঁর কাজের মান
              সম্পর্কে ধারনা অর্জন করতে পারেন ফলাবর্তন বা Feedback এর মাধ্যমে।
            </p>
            <div className="flex items-center gap-4 px-5 pt-5">
              <img
                src="https://i.ibb.co/z5hSDwY/image-97.png"
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h3 className="text-center text-2xl font-bold pt-2">
                  Reduanul Riyad
                </h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-11/12 py-10 rounded-lg duration-500 shadow-lg border-2 relative cursor-pointer group">
            <span className=" :">
              <Icon
                icon="icon-park:quote"
                width={40}
                className="absolute -top-6  left-5"
              />
            </span>
            <p className="text-left px-5">
              ফলাবর্তন যা কোনো বিষয়ের উপর আলোচনা কিংবা সমালোচনা কিংবা কোন অবস্থা
              সম্পর্কে সার্বিক মন্তব্য। যাকে প্রদান করা হয় তিনি তাঁর কাজের মান
              সম্পর্কে ধারনা অর্জন করতে পারেন ফলাবর্তন বা Feedback এর মাধ্যমে।
            </p>
            <div className="flex items-center gap-4 px-5 pt-5">
              <img
                src="https://i.ibb.co/z5hSDwY/image-97.png"
                alt=""
                className="w-20 rounded-full"
              />
              <div>
                <h3 className="text-center text-2xl font-bold pt-2">
                  Reduanul Riyad
                </h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default homeSectionFive;
