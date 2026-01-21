import React from "react";
import imageOne from "../assets/images/modelEight.jpg";
import imageTwo from "../assets/images/modelNine.jpg";

const Blog = () => {
  return (
    <div className="px-5 mt-20 flex flex-col gap-3 mb-3">
      <div className="flex items-center gap-2.5 cursor-pointer opacity-80 justify-end">
        <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
          <i className="ri-arrow-right-up-long-line"></i>
        </div>
        <p className="font-[squeeze]">LIBRARY</p>
      </div>
      <div className="flex gap-3">
        <div className="p-10 w-1/3 h-125 bg-[#1e1e1e] rounded-md flex flex-col justify-between">
          <p className="font-[squeeze]">BLOG</p>
          <div className="flex flex-col gap-3 mb-20">
            <h1 className="text-5xl flex items-center gap-5">LATEST NEWS</h1>
            <p className="opacity-80">
              This is just a way to represent youself infront the world of
              fashion by just taking our way.
            </p>
          </div>
          <div className="flex items-center gap-2.5  opacity-80">
            <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full cursor-pointer opacity-40">
              <i className="ri-arrow-left-long-line"></i>
            </div>
            <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full cursor-pointer">
              <i className="ri-arrow-right-long-line"></i>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-125 bg-[#1e1e1e] rounded-md overflow-hidden p-2.5 flex flex-col justify-between">
          <img
            className="h-1/2 w-full object-cover object-top rounded-md"
            src={imageOne}
            alt=""
          />
          <h1 className="text-3xl uppercase px-5">The beginning of new Cult</h1>
          <p className="opacity-60 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, et
            corrupti. Nobis illo harum in soluta eveniet amet quisquam rerum!
          </p>
          <div className="flex items-center gap-2.5 cursor-pointer opacity-80 justify-end px-5 pb-5">
            <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
              <i className="ri-arrow-right-up-long-line"></i>
            </div>
            <p className="font-[squeeze]">CHECK NOW</p>
          </div>
        </div>
        <div className="w-1/3 h-125 bg-[#1e1e1e] rounded-md overflow-hidden p-2.5 flex flex-col justify-between">
          <img
            className="h-1/2 w-full object-cover object-center rounded-md"
            src={imageTwo}
            alt=""
          />
          <h1 className="text-3xl uppercase px-5">bring everyday as new</h1>
          <p className="opacity-60 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, et
            corrupti. Nobis illo harum in soluta eveniet amet quisquam rerum!
          </p>
          <div className="flex items-center gap-2.5 cursor-pointer opacity-80 justify-end px-5 pb-5">
            <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
              <i className="ri-arrow-right-up-long-line"></i>
            </div>
            <p className="font-[squeeze]">CHECK NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
