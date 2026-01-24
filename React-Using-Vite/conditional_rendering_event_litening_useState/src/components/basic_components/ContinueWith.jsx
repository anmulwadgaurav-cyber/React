import React from "react";

const ContinueWith = () => {
  return (
    <div className="flex flex-col gap-5 w-full px-15">
      <div className="flex items-center gap-3 w-full justify-center">
        <div className="h-px w-full bg-gray-300"></div>
        <p className="w-full whitespace-nowrap text-gray-400 text-sm">
          or continue with
        </p>
        <div className="h-px w-full bg-gray-300"></div>
      </div>
      <div className="flex justify-around">
        <h1 className="text-2xl px-7 py-2 bg-gray-200 w-fit rounded-full cursor-pointer hover:bg-gray-300 transition-all ease-in duration-200">
          <i className="ri-twitter-x-fill"></i>
        </h1>
        <h1 className="text-2xl px-7 py-2 bg-gray-200 w-fit rounded-full cursor-pointer hover:bg-gray-300 transition-all ease-in duration-200">
          <i className="ri-google-fill"></i>
        </h1>
        <h1 className="text-2xl px-7 py-2 bg-gray-200 w-fit rounded-full cursor-pointer hover:bg-gray-300 transition-all ease-in duration-200">
          <i className="ri-facebook-fill"></i>
        </h1>
      </div>
     
    </div>
  );
};

export default ContinueWith;
