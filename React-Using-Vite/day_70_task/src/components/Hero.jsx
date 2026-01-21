import React from "react";
import imageOne from "../assets/images/imageOne.jpg";

const Hero = () => {
  return (
    <div className="px-5 mb-3 w-full">
      <div className="w-full h-150 rounded-md overflow-hidden relative">
        <div className="z-11 absolute top-50 left-20">
          <div className="absolute">
            <h1 className="text-9xl font-light tracking-widest">DESIGN</h1>
            <h1 className="text-9xl ml-45 font-light w-max tracking-widest">
              & FREEDOM
            </h1>
            <div className="flex w-300 justify-between">
              <p className="ml-45 opacity-70">
                Explore Independent Style by Embracing Uniqueness <br /> with
                Our Exclusive Designer Apparel
              </p>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-down-long-line text-2xl"></i>
                </div>
                <p className="font-[squeeze] ">LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={imageOne}
          alt=""
          className="object-cover object-top w-full h-full absolute z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
