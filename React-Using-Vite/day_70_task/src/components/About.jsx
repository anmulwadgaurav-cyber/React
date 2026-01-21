import React from "react";
import fashionImage from "../assets/images/fashion.jpg";

const About = () => {
  return (
    <div className="px-5 flex gap-3 mb-3 h-125">
      <div className="w-1/2 bg-[#1e1e1e] p-10 rounded-md flex flex-col justify-between gap-10">
        <p className="font-[squeeze] mb-5">ABOUT</p>
        <h1 className="text-5xl">
          WHERE FASHION MEETS <br />
          FREEDOM
        </h1>
        <div className="opacity-60 flex justify-between">
          <p className="text-sm">
            We believe that fashion should be <br />
            an expression of individuality. We encourage <br />
            creativity and originality in every item we <br />
            offer. presenting cutomers with exclusive <br />
            collections from independent designers. <br />
            With a commitment to fostering <br />a community of creativity and
            innovation.
          </p>
          <p className="text-sm">
            we strive to connect designers with fasion <br />
            enthusiats who appreciate the artistry and <br /> individuality
            behind each piece. Driven <br />
            by our dedication to authenticity, we curate <br />
            each collection with a keen eye for unique <br />
            designs that inspire confidence and <br />
            self-expression.
          </p>
        </div>
      </div>
      <div className="w-1/2 overflow-hidden rounded-md">
        <img className="object-cover object-bottom w-full h-full" src={fashionImage} alt="" />
      </div>
    </div>
  );
};

export default About;
