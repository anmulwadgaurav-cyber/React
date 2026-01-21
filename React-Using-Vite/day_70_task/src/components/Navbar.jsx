import React from "react";

const Navbar = () => {
  return (
  <div className="w-full py-3 px-5 flex justify-between items-center">
    <h1 className="text-white text-2xl font-[main] cursor-pointer hover:opacity-80">DVSY</h1>
    <div className="links flex gap-3">
      <p className="px-2.5 py-2 bg-[#1e1e1e] w-fit text-white rounded-md cursor-pointer font-[squeeze] hover:bg-[#2e2e2e]">DESIGNERS</p>
      <p className="px-2.5 py-2 bg-[#1e1e1e] w-fit text-white rounded-md cursor-pointer font-[squeeze] hover:bg-[#2e2e2e]">COLLABS</p>
      <p className="px-2.5 py-2 bg-[#1e1e1e] w-fit text-white rounded-md cursor-pointer font-[squeeze] hover:bg-[#2e2e2e]">EVENTS</p>
      <p className="px-2.5 py-2 bg-[#1e1e1e] w-fit text-white rounded-md cursor-pointer font-[squeeze] hover:bg-[#2e2e2e]">BLOG</p>
      <p className="px-2.5 py-2 bg-[#1e1e1e] w-fit text-white rounded-md cursor-pointer font-[squeeze] hover:bg-[#2e2e2e]">CARD</p>
      <p className="px-2.5 py-2 bg-[#e67458] w-fit text-black font-bold rounded-md cursor-pointer font-[squeeze] hover:bg-[#ff8162]">GET IN TOUCH</p>
    </div>
  </div>
  ) 
};

export default Navbar;
