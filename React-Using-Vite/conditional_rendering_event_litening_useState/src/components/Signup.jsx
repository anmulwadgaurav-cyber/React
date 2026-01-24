import React from "react";
import Button from "./basic_components/Button.jsx";
import InputField from "./basic_components/InputField";
import ContinueWith from "./basic_components/ContinueWith.jsx";

const Signin = () => {
  return (
    <div className="flex flex-col gap-5 w-fit p-4">
      <div className="heading">
        <h1 className="text-3xl font-medium">Create an account</h1>
        <p className="opacity-60 mt-1">
          By creating new account you can save your data and access anytime
        </p>
      </div>
      <form action="" className="flex flex-col gap-5">
        <InputField placeholder="Enter your email" />
        <InputField placeholder="Enter password" type="password" />
        <InputField placeholder="Confirm password" type="password" />
        <Button text="Sign up" color="blue" />
       
      </form>
     
    </div>
  );
};

export default Signin;
