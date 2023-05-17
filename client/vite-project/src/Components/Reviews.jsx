import React from "react";
import "./script.js";
import { useState } from "react";
const Reviews = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="sm:z-10  static sm:h-screen pt-[6rem] mb-12 ">
        {/* bg-gradient-to-r from-[#f0f2f0] via-white bg-fixed */}
    <h1 className="flex justify-center text-5xl pb-[6rem] font-bold text-blue-500  ">Reviews </h1>
      
<div class="grid pb-8 mt-10 rounded-lg shadow-sm dark:border-gray-700 md:pb-12 md:grid-cols-2">
    <figure className="mx-16 my-8 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Outstanding Web Development Services!</h3>
            <p class="my-4"> The team at MG did a fantastic job in creating our website. They paid attention to every detail and ensured a seamless user experience. Our website not only looks visually appealing but also functions flawlessly...</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Abhishek Sharma</div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
        </figcaption>    
    </figure>
    <figure className="mx-16 my-8 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Top-notch Cyber Security Solutions!</h3>
            <p class="my-4 "> MG provided us with exceptional cyber security services that gave us peace of mind. Their team meticulously analyzed our systems, identified vulnerabilities, and implemented robust security measures.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Rohit Singh</div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
        </figcaption>    
    </figure>
    <figure className="mx-16 my-8 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Impressive Web Development and Security Expertise!</h3>
            <p class="my-4"> We approached MG for our web development and cyber security requirements, and they exceeded our expectations. Their talented team created a stunning website that perfectly represents our brand. </p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Ankit Singla</div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
        </figcaption>    
    </figure>
    <figure className="mx-16 my-8 flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Reliable Networking Solutions!</h3>
            <p class="my-4"> We engaged MG for our networking needs, and they delivered exceptional results. Their team of experts designed and implemented a robust network infrastructure that perfectly aligned with our requirements. </p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Arjun Kumar</div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
        </figcaption>    
    </figure>
</div>

    </div>
  );
};

export default Reviews;
