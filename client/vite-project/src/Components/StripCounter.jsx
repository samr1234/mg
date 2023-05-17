import React from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useCountUp } from 'react-countup'







const StripCounter = () => {
 
  return (
    <div className="bg-[url('/bg.png')] bg-right-top bg-cover ">
    <h1 className="flex justify-center gap-2  text-5xl pt-12  mb-10 font-bold text-blue-500">Achievements</h1>
    <div className="sm:flex block mx-auto w-[20rem]  justify-around  mt-12 pb-12 ">
      
      <div className=" mb-10 border-8 shadow-lg shadow-indigo-500/50 border-indigo-500/50 rounded-full py-12 px-12 text-2xl  ">
      <div className="flex flex-col items-center justify-center text-indigo-500/50">
          <div className="flex gap-2 justify-center items-center   font-bold">
            <h1 className="text-3xl">250</h1>
            <h1 className="text-2xl">+</h1>
          </div>
          <h3 className=" font-bold text-3xl">Projects</h3>
          </div>
    
      </div>
      <div className=" mb-10 border-8 shadow-lg border-[#74F2CE] shadow-[#74F2CE] rounded-full py-12 px-12 text-2xl">
      <div className="flex flex-col items-center justify-center text-[#74F2CE]">
          <div className="flex gap-2 justify-center items-center   font-bold">
            <h1 className="text-3xl">250</h1>
            <h1 className="text-2xl">+</h1>
          </div>
          <h3 className=" font-bold text-3xl">Clients</h3>
          </div>
      </div>
      <div className=" mb-10 border-8 shadow-lg border-[#74F2CE] shadow-[#74F2CE] rounded-full py-12 px-12 text-2xl">
      <div className="flex flex-col items-center justify-center text-[#74F2CE]">
          <div className="flex gap-2 justify-center items-center   font-bold">
            <h1 className="text-3xl">300</h1>
            <h1 className="text-2xl">+</h1>
          </div>
          <h3 className=" font-bold text-3xl">Teams</h3>
          </div>
      </div>
      <div className="mb-10 border-8 shadow-lg border-[#F7B42C] shadow-[#F7B42C] rounded-full py-12 px-12 text-2xl">
      <div className="flex flex-col items-center justify-center text-[#F7B42C]">
          <div className="flex gap-2 justify-center items-center   font-bold">
            <h1 className="text-3xl">300</h1>
            <h1 className="text-2xl">+</h1>
          </div>
          <h3 className=" font-bold text-3xl">Awards</h3>
          </div>
      </div>
    </div>
    </div>
  );
};

export default StripCounter;
