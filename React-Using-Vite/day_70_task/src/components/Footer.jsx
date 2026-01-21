import React from "react";

const Footer = () => {
  return (
    <div className="px-5 mt-20 flex flex-col gap-3 mb-3">
      <div className="w-full bg-[#1e1e1e] rounded-md p-10 flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="font-[squeeze]">NEWSLETTER</p>
          <h1 className="text-5xl">STAY IN THE LOOP</h1>
        </div>
        <div className="flex gap-2.5">
          <input
            className="px-5 py-2.5 outline-none border rounded-md border-[#4e4e4e] w-100"
            type="text"
            placeholder="Enter Email"
          />
          <button className="px-5 py-2.5 bg-[#e67458] w-fit text-black font-bold rounded-md cursor-pointer font-[squeeze] hover:bg-[#ff8162]">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="flex gap-3 h-80">
        <div className="w-1/3 h-full bg-[#1e1e1e] rounded-md p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-2xl font-bold">DVSY</h1>
            <p className="opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              cupiditate eum.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-[squeeze]">FOLLOW US</p>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-10 h-10 bg-[#2e2e2e] rounded-full flex items-center justify-center cursor-pointer"
              >
                <i class="ri-facebook-circle-fill text-3xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2e2e2e] rounded-full flex items-center justify-center cursor-pointer"
              >
                <i class="ri-instagram-fill text-3xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#2e2e2e] rounded-full flex items-center justify-center cursor-pointer"
              >
                <i class="ri-twitter-x-line text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full bg-[#1e1e1e] rounded-md p-10 flex justify-between">
          <div className="h-full flex flex-col justify-between">
            <p className="text-2xl font-[squeeze]">DVSY</p>
            <ul className="flex flex-col gap-3 h-full mt-5 ">
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Home
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Designers
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Collabs
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Events
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Blogs
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Contacts
              </li>
            </ul>
          </div>
          <div className="h-full flex flex-col justify-between">
            <p className="text-2xl font-[squeeze]">SUPPORT</p>
            <ul className="flex flex-col gap-3 h-full mt-5 ">
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                FAQ
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Help
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Support
              </li>
            </ul>
          </div>
          <div className="h-full flex flex-col justify-between">
            <p className="text-2xl font-[squeeze]">LEGAL</p>
            <ul className="flex flex-col gap-3 h-full mt-5 ">
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Terms & Conditions
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Privacy & Policy
              </li>
              <li className="cursor-pointer opacity-60 hover:text-white hover:opacity-100">
                Cookies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
