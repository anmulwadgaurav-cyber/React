import React from "react";
import imageOne from "../assets/images/modelFour.jpg";
import imageTwo from "../assets/images/modelFive.jpg";
import imageThree from "../assets/images/modelSix.jpg";
import imageFour from "../assets/images/modelSeven.jpg";

const GridSix = () => {
  return (
    <div className="px-5 mt-20 flex flex-col gap-3 mb-3">
      <div className="flex items-center gap-2.5 cursor-pointer opacity-80 justify-end">
        <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
          <i className="ri-arrow-right-up-long-line"></i>
        </div>
        <p className="font-[squeeze]">CATALOGUE</p>
      </div>
      <div className="flex gap-3">
        <div className="p-10 w-1/3 h-100 bg-[#1e1e1e] rounded-md flex flex-col justify-between">
          <p className="font-[squeeze]">APPEARANCE</p>
          <h1 className="text-5xl flex items-center gap-5">
            EXSY <span className="text-2xl">✕</span> ARISHA
          </h1>
          <div className="flex items-center gap-2.5 cursor-pointer opacity-80">
            <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
              <i className="ri-arrow-right-long-line"></i>
            </div>
            <p className="font-[squeeze]">EXPERIENCE NOW</p>
          </div>
        </div>
        <div className="w-1/3 h-100 bg-red-500 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={imageOne}
            alt=""
          />
        </div>
        <div className="w-1/3 h-100 bg-red-500 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={imageTwo}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <div className="p-10 w-1/3 h-100 bg-[#1e1e1e] rounded-md flex flex-col justify-between">
          <p className="text-transparent"></p>
          <h1 className="text-5xl flex items-center gap-5">
            ASHE <span className="text-2xl">✕</span> BARKLY
          </h1>
          <div className="flex items-center gap-2.5 cursor-pointer opacity-80">
            <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
              <i className="ri-arrow-right-long-line"></i>
            </div>
            <p className="font-[squeeze]">EXPERIENCE NOW</p>
          </div>
        </div>
        <div className="w-1/3 h-100 bg-red-500 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={imageThree}
            alt=""
          />
        </div>
        <div className="w-1/3 h-100 bg-red-500 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover object-top"
            src={imageFour}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GridSix;
