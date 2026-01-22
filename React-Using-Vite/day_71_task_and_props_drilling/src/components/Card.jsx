import React from "react";
import imageOne from "../assets/images/userOne.jpg";
import sceneOne from "../assets/images/scene.jpg";

const Card = (props) => {
  return (
    <div className="p-4 w-fit">
      <div className="card h-120 w-75 bg-white rounded-4xl p-2 shadow-md hover:shadow-2xl transition-all ease-in duration-200 ">
        <div className="cover h-40 w-full relative">
          <img
            src={props.coverImage}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="profile-photo cursor-pointer w-30 h-30 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-green-400 p-[3px] absolute bottom-[-50%] left-1/2 translate-x-[-50%] translate-y-[-20%]">
            <div className="w-full h-full rounded-full bg-white p-[3px] overflow-hidden ">
              <img
                src={props.photo}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="follow w-10 h-10 rounded-full absolute right-2 top-2 bg-gray-100 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-all ease-in duration-200">
            <i
              className={`${props.isFollowed ? "ri-check-line bg-blue-400 w-full h-full rounded-full flex justify-center items-center text-white" : "ri-add-large-line"}`}
            ></i>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5">
          <div className="name">
            <h1 className="text-black text-2xl text-center">{props.name}</h1>
            <p className="text-black text-sm text-center opacity-60">
              {props.job}
            </p>
          </div>
          <div className="stats p-5 bg-gray-100 flex justify-between rounded-2xl shadow-md ">
            <div className="text-center">
              <h1 className="font-semibold text-lg">{props.likes}</h1>
              <p className="text-sm opacity-60">Likes</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-lg">{props.posts}</h1>
              <p className="text-sm opacity-60">Posts</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-lg">{props.views}</h1>
              <p className="text-sm opacity-60">Views</p>
            </div>
          </div>
          <div className="social opacity-60 flex justify-center gap-3">
            <i class="ri-instagram-line text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all ease-in duration-200"></i>
            <i class="ri-twitter-x-line text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all ease-in duration-200"></i>
            <i class="ri-threads-line   text-2xl opacity-60 hover:opacity-100 cursor-pointer transition-all ease-in duration-200"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
