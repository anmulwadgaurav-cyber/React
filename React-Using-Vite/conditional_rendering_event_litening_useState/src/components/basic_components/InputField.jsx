import React, { useState } from "react";

const inputField = (props) => {
  const [type, setType] = useState(props.type);
  const [Input, setInput] = useState("")
  
  function status() {
    if (type === "text") {
      setType("password");
    } else if (type === "password") {
      setType("text");
    }
  }
  return (
    <div className="relative">
      <input
        className="px-5 py-2.5 w-full border rounded border-gray-400 outline-none relative focus:border-blue-600"
        required
        type={type}
        placeholder={props.placeholder}
        value={Input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <div>
        {props.type === "password" ? (
          <i
            className={
              type === "password"
                ? `ri-eye-line absolute top-1/2 right-5 translate-y-[-50%] cursor-pointer text-xl`
                : `ri-eye-off-line absolute top-1/2 right-5 translate-y-[-50%] cursor-pointer text-xl`
            }
            onClick={status}
          ></i>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default inputField;
