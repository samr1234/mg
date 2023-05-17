import React from 'react'

const Footer = () => {
  return (
    <div className="">
        
    <div className="flex justify-around   px-6  pb-10 bg-[#6674CC] text-white  py-8 h-64">
        <div>
            <h1 className="text-2xl mb-2">MG</h1>
            <p>new delhi <br/> India </p>
            <p>Phone: +91 9056022600</p>
            <p>Email: hr@mggroup.com</p>

        </div>
        <div>
            <h3 className="text-2xl mb-2">Quick links</h3>
            <ul>
            <a href="#"><li className="hover:text-cyan-300 ">Home</li></a>
            <a href="#about"><li className="hover:text-cyan-300 cursor-pointer">About</li></a>
            <a href="#services"><li className="hover:text-cyan-300 cursor-pointer">Services</li></a>
           < a href="#contact"><li className="hover:text-cyan-300 cursor-pointer">Contact</li></a>
            </ul>
        </div>
        <div>
            <h3 className="text-2xl  mb-2 ">Our services</h3>
            <ul className="cursor-pointer">
                <li className="hover:text-cyan-300 ">web design</li>
                <li className="hover:text-cyan-300 ">web development</li>
                <li className="hover:text-cyan-300 ">marketing</li>
            </ul>
        </div>
        <div className="sm:block hidden">
            <h3 className="text-2xl mb-2 cursor-pointer">follow us</h3>
            <ul className="cursor-pointer">
                <li  className="hover:text-cyan-300 ">facebook</li>
                <li className="hover:text-cyan-300 ">twitter</li>
                <li className="hover:text-cyan-300 ">instagram</li>
                <li className="hover:text-cyan-300 ">linkedin</li>
            </ul>
        </div>
    </div>

    <div >
        <p className="text-center bg-[#9577EA] text-white  py-4">© 2023 MG. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer