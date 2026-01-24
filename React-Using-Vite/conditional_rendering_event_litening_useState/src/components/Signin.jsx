import React, { useState } from "react";
import Button from "./basic_components/Button.jsx";
import InputField from "./basic_components/InputField";
import ContinueWith from "./basic_components/ContinueWith.jsx";

const Signin = () => {
  return (
    <div className="flex flex-col gap-5 w-full p-4">
      <div className="heading">
        <h1 className="text-3xl font-medium">Welcome Back!</h1>
        <p className="opacity-60 mt-1">
          Access your all previous data by login again. You can stay logged in.
        </p>
      </div>
      <form action="" className="flex flex-col gap-5">
        <InputField placeholder="Enter your email" type="email" />
        <InputField placeholder="Enter password" type="password" />
        <p className="font-medium w-fit text-end cursor-pointer text-sm hover:text-blue-600 transition-all ease-in duartion-200">
          Forgot Password?
        </p>
        <Button text="Login"/>
      </form>
    </div>
  );
};

export default Signin;
