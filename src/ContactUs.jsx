import React from 'react'
import mal from "./assets/mal.png";
import app from "./assets/app.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

import { FaInstagram } from "react-icons/fa6";

function ContactUs() {
  return (
   <div className='h-full w-full bg-black'>
      <div className='w-full  text-red-500 h-full  '>
 <img
            src={mal}
            alt="ww"
            className=" w-full h-screen "
          />

        
        
      </div>


      <div className=' flex h-96  w-full'>

        <div className='flex  flex-col gap-7 bg-black w-1/2 text-red-600'>
          <div className='flex justify-center'>
          <h1 className='text-4xl text-[#FFF528] '>DOWNLOAD THE APP SOON</h1>
          </div>
          <div className='flex  justify-center'>
            <img
            src={app}
            alt="play store"
            className="mr-24 "
          />
          </div>

          
          <div className='bg text-[#FFF528] text-3xl ml-52'> ALSO FOLLOW US ON</div>
         
          <div className='flex gap-6 ml-52'>
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
            <div className='text-[#FFF528] px-52 font-bold'><h1>Copyright © 2024 Vupop. All Rights Reserved.</h1></div>
        </div>



        <div className=' flex flex-col w-1/2 '>
          <div className='text-[#FFF528] text-[40px] px-16'><h1>
            BROADCASTER WAITLIST</h1></div>
          <div className='font-bold text-[#FFF528] px-16 text-2xl '>Register Interest here and we will be in touch to book a demo

            <div className='h-16 w-96 mt-3 flex justify-center items-center bg-[#FFF528] text-black rounded-lg'>Book a Broadcaster Demo </div>

</div>
          
          
            
        
        
    
        
        
        </div>
      



      </div>









    <div className='h-44 w-full flex items-center bg-[#FFF528]'>

        <h1 className='text-black px-44 font-bold text-[60px]'>
          <u>CONTACT US</u>
          </h1>
        </div>
    </div>
  )
}

export default ContactUs;
