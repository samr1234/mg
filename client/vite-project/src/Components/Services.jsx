import React from "react";

import data from "./servicesData";
import {motion} from 'framer-motion'

const Services = () => {
 
  return (
    <div id="services" className="pt-[6rem] pb-4 sm:h-screen">
      <h1 className="sm:z-999 flex justify-center text-5xl pb-[6rem] font-bold text-blue-500">
        Services
      </h1>
      
      <div className="sm:flex flex-wrap justify-around ">
        {
         
                data.map((data)=>(
                  <div className="">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
        <a href="#">
          <img
            className="rounded-t-lg w-[25rem] h-[15rem] object-cover object-center"
            src={data.img}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {data.heading}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
            {data.description}
          </p>
          <a href="#">
          <button

      
            className="block mx-auto border py-2 px-3 rounded-2xl  hover:text-white hover:bg-cyan-400"
          >
            Read more
            
          </button></a>
        </div>
      </div>
     
      </div>

                ))

               
       
      
       }
       </div>
      
    </div>
  );
};

export default Services;
