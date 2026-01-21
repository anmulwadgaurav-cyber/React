import React from "react";

const Features = () => {
  return (
    <div className="px-5 flex justify-between gap-3 mb-3">
      <div className="box rounded-md bg-[#1e1e1e] w-full p-10 flex flex-col gap-2.5 ">
        <h1>INDEPENDENCY</h1>
        <p className="text-sm opacity-60">
          Explore the creativity of independent <br />
          designers from around the globe.
        </p>
        <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
          <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
            <i className="ri-arrow-right-up-long-line"></i>
          </div>
          <p className="font-[squeeze] ">LEARN MORE</p>
        </div>
      </div>
      <div className="box rounded-md bg-[#1e1e1e] w-full p-10 flex flex-col gap-2.5 ">
        <h1>UNIQUITY</h1>
        <p className="text-sm opacity-60">
          Dicover the charm of unique pieces <br />
          that stand out effortlessly.
        </p>
        <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
          <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
            <i className="ri-arrow-right-up-long-line"></i>
          </div>
          <p className="font-[squeeze] ">LEARN MORE</p>
        </div>
      </div>
      <div className="box rounded-md bg-[#1e1e1e] w-full p-10 flex flex-col gap-2.5 ">
        <h1>QUALITY</h1>
        <p className="text-sm opacity-60">
          Experience unparalleled <br />
          craftmanship and attention to detail.
        </p>
        <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
          <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
            <i className="ri-arrow-right-up-long-line"></i>
          </div>
          <p className="font-[squeeze] ">LEARN MORE</p>
        </div>
      </div>
      <div className="box rounded-md bg-[#1e1e1e] w-full p-10 flex flex-col gap-2.5 ">
        <h1>SUSTAINABILITY</h1>
        <p className="text-sm opacity-60">
          Embrace eco-concious fashion choices <br />
          without compromising on styles.
        </p>
        <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
          <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
            <i className="ri-arrow-right-up-long-line"></i>
          </div>
          <p className="font-[squeeze] ">LEARN MORE</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
