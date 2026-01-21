import React from "react";
import modelOneImg from "../assets/images/modelOne.jpg";
import modelTwoImg from "../assets/images/modelTwo.jpg";
import modelThreeImg from "../assets/images/modelThree.jpg";

const TopDesigners = () => {
  return (
    <div className="px-5 mt-15 flex flex-col gap-3 mb-3">
      <h1 className="text-5xl ml-10">TOP DESIGNERS</h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 mt-5">
          <div className="bg-[#1e1e1e] h-full w-1/3 rounded-md p-3 flex flex-col gap-3">
            <div className="w-full h-100 bg-green-900 rounded-md overflow-hidden object-cover">
              <img
                className="h-full w-full object-cover"
                src={modelOneImg}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1>JESSICA</h1>
                <p className="font-[squeeze] opacity-60">DESIGNER</p>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-long-line"></i>
                </div>
                <p className="font-[squeeze] opacity-60">PORTFOLIO</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1e1e1e] h-full w-1/3 rounded-md p-3 flex flex-col gap-3">
            <div className="w-full h-100 bg-green-900 rounded-md overflow-hidden object-cover">
              <img
                className="h-full w-full object-cover"
                src={modelTwoImg}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1>JOHN</h1>
                <p className="font-[squeeze] opacity-60">FABRICS DESIGNER</p>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-long-line"></i>
                </div>
                <p className="font-[squeeze] opacity-60">PORTFOLIO</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1e1e1e] h-full w-1/3 rounded-md p-3 flex flex-col gap-3">
            <div className="w-full h-100 bg-green-900 rounded-md overflow-hidden object-cover">
              <img
                className="h-full w-full object-cover object-top"
                src={modelThreeImg}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1>SIMEON</h1>
                <p className="font-[squeeze] opacity-60">HEAD DESIGNER</p>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-long-line"></i>
                </div>
                <p className="font-[squeeze] opacity-60">PORTFOLIO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-[#1e1e1e] rounded-md flex flex-col gap-3">
          <p className="font-[squeeze]">CONTACT</p>
          <div className="flex justify-between items-end">
            <h1 className="text-5xl">
              EXPLORE THE CREATIVITY OF INDEPENDENT <br /> DESIGNERS FROM AROUND
              THE GLOBE
            </h1>
            <p className="px-2.5 py-2 bg-[#e67458] w-fit text-black font-bold rounded-md cursor-pointer font-[squeeze] hover:bg-[#ff8162]">
              GET IN TOUCH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDesigners;
