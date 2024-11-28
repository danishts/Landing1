import React, { useState } from 'react';
import mal from "./assets/mal.png";
import fff from "./assets/fff.png";
import app from "./assets/app.png";
import { FaFacebook } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

function ContactUs() {
  // State to manage the form visibility
  const [showForm, setShowForm] = useState(false);

  // Function to handle form visibility toggle
  // const toggleForm = () => {
  //   setShowForm(!showForm);
  // };
const toggleForm = () => {
  setShowForm((prevState) => !prevState);
};

  return (
    <div className="h-full w-full bg-black">
      <div className="w-full text-red-500 h-full">
        <img src={mal} alt="ww" className="w-full h-screen" />
      </div>
      <div className="flex h-96 w-full">
        <div className="flex flex-col gap-7 bg-black w-1/2 text-red-600">
          <div className="flex justify-center">
            <h1 className="text-4xl text-[#FFF528] ">DOWNLOAD THE APP SOON</h1>
          </div>
          <div className="flex justify-center">
            <img src={app} alt="play store" className="mr-24 " />
          </div>

          <div className="bg text-[#FFF528] text-3xl ml-52">
            {" "}
            ALSO FOLLOW US ON
          </div>

          <div className="flex gap-6 ml-52">
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
                <FaFacebook className="text-[#FFF528] text-4xl" />
                <h1 className="text-center mt-1 text-[#FFF528]">Facebook</h1>
              </a>

              {/* Vertical Line */}
              <div className="h-6 w-[2px] bg-[#FFF528]"></div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
                <FaInstagram className="text-4xl text-[#FFF528]" />
                <h1 className="text-center mt-1 text-[#FFF528]">Instagram</h1>
              </a>

              {/* Vertical Line */}
              <div className="h-6 w-[2px] bg-[#FFF528]"></div>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center"
              >
                <AiFillTikTok className="text-4xl text-[#FFF528]" />
                <h1 className="text-center mt-1 text-[#FFF528]">TIKTOK</h1>
              </a>
            </div>
          </div>

          <div className="text-[#FFF528] px-52 font-bold">
            <h1>Copyright © 2024 Vupop. All Rights Reserved.</h1>
          </div>
        </div>

        <div className="flex flex-col w-1/2 ">
          <div className=" text-[35px] px-16">
            <h1>BROADCASTER WAITLIST</h1>
          </div>
          <div className="font-bold text-[#FFF528] px-16 text-2xl">
            Register Interest here and we will be in touch to book a demo
            <div
              onClick={toggleForm}
              className="h-16 w-96 mt-3 flex justify-center items-center bg-[#FFF528] text-black rounded-lg cursor-pointer"
            >
              Book a Broadcaster Demo
            </div>
            {/* Form that opens when button is clicked */}
            {showForm && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="w-[530px] bg-white rounded-lg p-5">
                  <div className="flex justify-between items-center">
                    <p className="text-black text-[20px] px-6 mb-4">
                      Request a demo of the vupop vault
                    </p>
                    {/* Close Button */}
                    <RxCross2
                      className="text-black cursor-pointer text-2xl"
                      onClick={toggleForm}
                    />
                  </div>

                  <div className="flex justify-center">
                    <img
                      src={fff}
                      alt="play store"
                      className="h-32 w-[380px] "
                    />
                  </div>
                  <form className="px-6">
                    <div className="flex flex-col justify-center gap-4">
                      <label className="inline-block text-black mt-4 mr-4">
                        FIRST NAME :
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="p-2 inline-block border-b  text-black border-gray-300 focus:outline-none"
                      />
                      <label className="text-black">LAST NAME :</label>
                      <input
                        type="text"
                        placeholder=""
                        className="p-2 border-b text-black border-gray-300 focus:outline-none"
                      />
                      <label className="text-black">Email :</label>
                      <input
                        type="email"
                        placeholder=""
                        className="p-2 border-b text-black border-gray-300 focus:outline-none"
                      />
                      <label className="text-black">Company:</label>
                      <input
                        type="text"
                        placeholder="e.g. ESPN"
                        className="p-2 border-b text-black border-gray-300 focus:outline-none"
                      />
                      <label className="text-black">PHONE NUMBER:</label>
                      <input
                        type="tel"
                        placeholder=""
                        className="p-2 border-b text-black border-gray-300 focus:outline-none"
                      />
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="mt-3 h-12 w-72 flex justify-center py-2 bg-[#3b3b3b] text-white rounded-lg"
                        >
                          Submit Request
                        </button>
                      </div>

                      <div className="flex gap-1 justify-center">
                        <p className="text-black text-[15px]">
                          We respect your
                        </p>
                        <p className="text-blue-500 text-[15px]">
                          email privacy
                        </p>
                      </div>
                      <div className="flex gap-1 justify-center">
                        <p className="text-blue-500 text-[11px]">
                          Powered by AWeber
                        </p>
                        <p className="text-blue-500 text-[11px]">
                          Email Marketing
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-44 w-full flex items-center bg-[#FFF528]">
        <h1 className="text-black px-44 font-bold text-[60px]">
          <u>CONTACT US</u>
        </h1>
      </div>
    </div>
  );
}

export default ContactUs;
