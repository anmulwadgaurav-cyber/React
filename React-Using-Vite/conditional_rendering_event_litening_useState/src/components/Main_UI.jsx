import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import imageOne from "../assets/images/imageOne.jpg";
import ContinueWith from "./basic_components/ContinueWith";

const Main_UI = () => {
  const [Mode, setMode] = useState("signin");

  return (
    <div className="flex shadow-md">
      <div className="w-125 h-170 bg-white flex p-2 justify-center items-center rounded-tl-md rounded-bl-md">
        <img
          className="object-cover h-full w-full rounded"
          src={imageOne}
          alt=""
        />
      </div>
      <div className="w-125 h-170 p-10 bg-white flex justify-top rounded-tr-md rounded-br-md flex-col">
        {Mode === "signin" ? (
          <div className="transition-all ease-in-out duration-200">
            <Signin />
            <ContinueWith />
            <p className="text-center text-sm mt-5">
              Don't have an account?
              <a
                className="font-bold text-blue-600 cursor-pointer"
                onClick={() => setMode("signup")}
              >
                {" "}
                Sign up
              </a>
            </p>
          </div>
        ) : (
          <div className="transition-all ease-in-out duration-200">
            <Signup />
            <ContinueWith />
            <p className="text-center text-sm mt-5">
              Already have an account?
              <a
                className="font-bold text-blue-600 cursor-pointer"
                onClick={() => setMode("signin")}
              >
                {" "}
                Sign in
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main_UI;
