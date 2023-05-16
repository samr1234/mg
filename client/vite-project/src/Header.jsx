import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="fixed w-full top-0 backdrop-blur-lg shadow-lg">
      <div className="flex justify-between sm:py-4 px-5  text-xl ">
        <div className="text-3xl font-bold text-red-500">MG</div>
        <div className="flex">
          <ul className="hidden sm:flex gap-3  cursor-pointer text-2xl ">
            <a href="#"><li className="hover:text-cyan-300 ">Home</li></a>
            <a href="#about"><li className="hover:text-cyan-300 cursor-pointer">About</li></a>
            <a href="#services"><li className="hover:text-cyan-300 cursor-pointer">Services</li></a>
           < a href="#contact"><li className="hover:text-cyan-300 cursor-pointer">Contact</li></a>
          </ul>
          {toggle ? (
            <div className="flex flex-col gap-3 sm:hidden">
              <div className="flex justify-end">
                <button onClick={() => setToggle(!toggle)} className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3 cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 px-4 rounded-2xl py-4">
              <a href="#"><li className="hover:text-cyan-300 ">Home</li></a>
            <a href="#about"><li className="hover:text-cyan-300 cursor-pointer">About</li></a>
            <a href="#services"><li className="hover:text-cyan-300 cursor-pointer">Services</li></a>
           < a href="#contact"><li className="hover:text-cyan-300 cursor-pointer">Contact</li></a>
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <button onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
