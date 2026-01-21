import React from "react";
import imageOne from "../assets/images/fashionTwo.jpg";
import imageTwo from "../assets/images/fashionThree.jpg";

const Advantages = () => {
  return (
    <div className="px-5 mt-15 flex flex-col gap-3">
      <h1 className="text-5xl ml-10">OUR ADVANTAGES</h1>
      <div className="h-125 flex gap-3 mt-5">
        <div className="w-1/2 overflow-hidden rounded-md">
          <img className="h-full object-cover" src={imageOne} alt="" />
        </div>
        <div className="flex flex-col w-1/2 h-full gap-3">
          <div className="bg-[#1e1e1e] rounded-md p-10 py-12 h-1/2 flex flex-col justify-between">
            <h1 className="text-lg">INDEPENDENT DESIGNERS</h1>
            <div className="flex justify-between items-end">
              <p className="opacity-60">
                Our platform celebrates the ingenuity of independent designers,
                offering <br /> a diverse range of fashion-forward garments that
                reflect the creativity <br /> and innovation of the artists
                behind them. Explore curated collections <br /> showcasing
                unique creations by independent designers.
              </p>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-up-long-line"></i>
                </div>
                <p className="font-[squeeze] ">EXPLORE</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1e1e1e] rounded-md p-10 py-12 h-1/2 flex flex-col justify-between">
            <h1 className="text-lg">EXCLUSIVE & UNIQUITY</h1>
            <div className="flex justify-between items-end">
              <p className="opacity-60">
                Indulge in curated collections showcasing exclusive,
                one-of-a-kind pieces. <br /> each with its own story and charm.
                Experience the allure of unique <br /> fashion pieces that
                radiate sophistication and individuality, curated <br /> for
                those who seek exclusivity.
              </p>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-up-long-line"></i>
                </div>
                <p className="font-[squeeze] ">EXPLORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-125 flex flex-row-reverse gap-3 mb-3">
        <div className="w-1/2 overflow-hidden rounded-md">
          <img
            className="h-full object-cover w-full object-top"
            src={imageTwo}
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 h-full gap-3">
          <div className="bg-[#1e1e1e] rounded-md p-10 py-12 h-1/2 flex flex-col justify-between">
            <h1 className="text-lg">HIGH QUALITY</h1>
            <div className="flex justify-between items-end">
              <p className="opacity-60">
                Embrace superior craftsmanship with our meticulously curated,{" "}
                <br />
                enduringly high-quality garments. Discover garments crafted{" "}
                <br /> with utmost attention to detail and finest materials,
                promising <br />
                longevity and timeless style.
              </p>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-up-long-line"></i>
                </div>
                <p className="font-[squeeze] ">EXPLORE</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1e1e1e] rounded-md p-10 py-12 h-1/2 flex flex-col justify-between">
            <h1 className="text-lg">ECO-FRIENDLY</h1>
            <div className="flex justify-between items-end">
              <p className="opacity-60">
                Join our commitment to sustainability with eco-friendly fashion
                options. <br /> stylish yet mindful of our planet. Explore guilt-free
                shopping with our <br /> eco-conscious collections, crafted with
                planet-friendly materials and <br /> ethical practices.
              </p>
              <div className="flex items-center gap-2.5 cursor-pointer opacity-80 mt-2.5">
                <div className="w-10 h-10 flex justify-center items-center bg-[#1e1e1e] border rounded-full">
                  <i className="ri-arrow-right-up-long-line"></i>
                </div>
                <p className="font-[squeeze] ">EXPLORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
