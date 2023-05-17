import React from "react";
import CountUp from "react-countup";
import { useCountUp } from 'react-countup'







const StripCounter = () => {
  useCountUp({ ref: 'counter', end: 250 });
  return (
    <div className="bg-[url('/bg.png')] bg-right-top bg-cover ">
    <h1 className="flex justify-center gap-2  text-5xl pt-12  mb-10 font-bold text-blue-500">Achievements</h1>
    <div className="sm:flex block mx-auto w-[20rem]  justify-around  mt-12 pb-12 ">
      
      <div className=" border-8 shadow-lg shadow-indigo-500/50 border-indigo-500/50 rounded-full py-12 px-12 text-2xl bg-gradient-to-r ">
        <CountUp start={0} end={250} duration={4}>
          {({ countUpRef, start }) => (
            <div className="flex flex-col items-center">
              <span className="text-indigo-500/50 font-bold" ref={countUpRef}>250</span>
              <button className=""onClick={start}>
           <span className="text-indigo-500/50 font-bold">Projects</span> 
              </button>
            </div>
          )}
        </CountUp>
    
      </div>
      <div className="border-8 shadow-lg border-cyan-500/50 shadow-cyan-500/50 rounded-full py-12 px-12 text-2xl">
        <CountUp start={0} end={300} duration={4}>
          {({ countUpRef, start }) => (
            <div className="flex flex-col items-center">
              <span className="text-cyan-500/50 font-bold" ref={countUpRef}>300</span>
              <button onClick={start}>
                <span className="text-cyan-500/50 font-bold">Clients</span>
              </button>
            </div>
          )}
        </CountUp>
      </div>
      <div className="border-8 shadow-lg border-[#74F2CE] shadow-[#74F2CE] rounded-full py-12 px-12 text-2xl">
        <CountUp start={0} end={50} duration={4}>
          {({ countUpRef, start }) => (
            <div className="flex flex-col items-center">
              <span className="text-[#74F2CE] font-bold" ref={countUpRef}>50</span>
              <button onClick={start}>
                <span className="text-[#74F2CE] font-bold"> Teams </span>
              </button>
            </div>
          )}
        </CountUp>
      </div>
      <div className="border-8 shadow-lg border-[#F7B42C] shadow-[#F7B42C] rounded-full py-12 px-12 text-2xl">
        <CountUp start={0} end={15} duration={4}>
          {({ countUpRef, start }) => (
            <div className="flex flex-col items-center">
              <span className="text-[#F7B42C] font-bold" ref={countUpRef}>15</span>
              <button onClick={start}>
               <span className="text-[#F7B42C] font-bold">Awards</span> 
              </button>
            </div>
          )}
        </CountUp>
      </div>
    </div>
    </div>
  );
};

export default StripCounter;
