
import React from 'react';
import d from './assets/d.png'; 
import { MdKeyboardArrowDown } from "react-icons/md";


function Dashboard() {
  return (
    <div className="h-full relative">
      {/* Image Container */}
      <div className="h-full w-screen">
        <img src={d} alt="d" className="h-full w-full object-cover" />
        
        {/* Div on top of the image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-[#FFF528] e z-50">
          <MdKeyboardArrowDown  className='h-9 w-9' />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
