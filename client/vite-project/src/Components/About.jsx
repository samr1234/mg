import React from 'react'

const About = () => {
  return (
    <div id="about" className="sm:h-screen pt-10 bg-no-repeat bg-gradient-to-r from-[#F7F8FC] via-[#F7F8FC] to-transparent ...">
        <h1 className="  flex justify-center text-5xl mb-[5rem] font-bold text-blue-500">About Us</h1>
        <div className="sm:flex items-center py-2">

            <img className="mx-auto w-[35rem]" src="/hero2.png"/>
           
          <div className="sm:flex flex-col items-center">
            <h4 className="mx-12  mb-[5rem] text-xl text-gray-400 text-justify">
            MG is a cutting-edge software company that specializes in providing innovative technology solutions to businesses across a wide range of industries. With a focus on developing user-friendly software products that simplify complex tasks and streamline workflows, MG is committed to delivering the highest quality of service to its clients.
             <span className="md:block hidden">The company's team of experienced software developers, designers, and engineers work collaboratively to design and develop software applications that meet the unique needs of each client.</span>
            </h4>
           
            <a href="#"><button className="flex justify-center border ml-4 border-gray-300 w-[10rem] text-2xl hover:text-white hover:ease-in hover:duration-300 hover:bg-cyan-400 rounded-xl py-2 px-3">Read More</button></a>
            </div>
           
            
        </div>
       
        
    </div>
  )
}

export default About