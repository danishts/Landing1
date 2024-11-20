import React from "react";
import o from "./assets/o.png";
import dd from "./assets/dd.png";
import da from "./assets/da.png";
import pop from "./assets/pop.png";
import dan from "./assets/dan.png";
function About() {
  return (
    <div className="h-[1500px] w-full flex flex-col  bg-black items-center relative">
      {/* Background Image as an IMG */}
      <img
        src={dd}
        alt="dd"
        className="absolute top-0 left-0 w-[400px] h-full object-cover"
      />

      {/* About Us Section */}
      <div className="relative w-full mt-10 py-10 px-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* About Us Content */}
        <div className="text-white text-left flex flex-col items-start ml-8 mb-4 md:mb-0">
          <h1 className="text-5xl font-bold text-[#FFF528] mb-4">About Us</h1>
          <p className="text-lg max-w-lg font-semibold">
            At vupop, we are driven by a single goal: to bridge the gap between
            sports fans and broadcasters. Founded by a team of passionate sports
            enthusiasts and media experts, vupop leverages cutting-edge
            technology to amplify the voices of fans and enhance the reach of
            broadcasters.
          </p>
        </div>

        {/* Right-side Image */}
        <div className="ml-auto w-full md:w-[800px] mt-4 md:mt-0 flex justify-center">
          <img
            src={o}
            alt="o"
            className="h-64 w-full md:w-[800px] object-contain"
          />
        </div>
      </div>

      <div className="absolute  w-full mt-10  py-10 px-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* About Us Content */}
        <div className="text-white text-left flex flex-col items-start ml-8">
          <h1 className="text-5xl font-bold text-[#FFF528] mb-4">About Us</h1>
          <p className="text-lg max-w-lg font-semibold">
            At vupop, we are driven by a single goal: to bridge the gap between
            sports fans and broadcasters. Founded by a team of passionate sports
            enthusiasts and media experts, vupop leverages cutting-edge
            technology to amplify the voices of fans and enhance the reach of
            broadcasters.
          </p>
        </div>
        {/* Right-side Image */}
        <div className="ml-auto mr-8   w-[800px] mt-4 md:mt-0">
          {/* Increased height of the o image */}
          <img src={o} alt="o" className="h-64 w-[800px] object-contain" />
        </div>

        <div className="absolute  w-full mt-[580px]      px-28 rounded-lg flex flex-col md:flex-row justify-end items-center">
          {/* About Us Content */}
          <div className="text-white text-left flex flex-col items-start ml-8">
            <h1 className="text-5xl font-bold text-[#FFF528] mb-4">
              Our Mission
            </h1>
            <p className="text-lg max-w-lg font-semibold">
              To revolutionize sports media by enabling fans to share their
              experiences and broadcasters to tell deeper, more engaging
              stories. We provide the tools to make every match more interactive
              and every fan's cheer heard around the world.
            </p>
          </div>
          {/* Right-side Image */}
          <div className="ml-auto mr-8    flex justify-end w-[1000px] mt-4 md:mt-0">
            {/* Increased height of the o image */}
            <img src={da} alt="o" className="h-64 w-[800px] object-contain" />
          </div>
        </div>

        <div className="absolute w-full mt-[1280px]     rounded-lg flex flex-col md:flex-row justify-end items-red">
          
          <div className="text-white text-left flex justify-end flex-1   flex-col items-end  ml-8">
            <h1 className="text-5xl  font-bold text-[#FFF528] mb-4">
              Our Vision
            </h1>
            <p className="text-lg max-w-lg font-semibold">
              Imagine a world where every great sports moment can be shared and
              celebrated by a global community. At vupop, we are making that
              world a reality, one game at a time, ensuring that fan content not
              only supports but leads the narrative in sports broadcasting. As
              well as rewarding Fans with money in their pocket.
            </p>
          </div>
          
          <div className="ml-auto mr-8   flex justify-end  mt-4 md:mt-0">

            <img
              src={dan}
              alt="dan"
              className="h-64 object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
