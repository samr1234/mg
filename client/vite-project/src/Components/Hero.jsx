import {useRef,useEffect,useCallback} from 'react'
import {init} from 'ityped'
const Hero = () => {

  const textRef = useRef();


useEffect(()=>{
  init(textRef.current, {
    showCursor: true,
    backDelay: 1500,
    backSpeed:60,
    strings: ["Web Development", "Network Security", "Cyber Security"],
  });
},[])



  return (
    <>
   
    <div className="lg:flex items-center justify-center px-6 md:h-screen  mt-12 bg-gradient-to-r from-white via-white to-[#F2DFF4] ...">
     
      <div className="mt-6 order-last w-full  ">
        <img
          src="/hero.png"
          href=""
          className="rounded-2xl "
        />
         
      </div>
     
      <div className=" ">
        <h1 className=" md:text-5xl sm:text-3xl text-2xl mt-3  text-[#363A45] text-justify font-bold  mx-auto">
          <span className="text-[#6674CC] mt-4 mb-2">Transforming</span> Technology  
          <br/><span ref={textRef}></span>
        </h1>
        <h5 className="text-2xl ">
          Welcome to MG Company, your trusted partner for comprehensive business
          solutions. We are dedicated to helping businesses thrive in the
          ever-evolving landscape of the digital age. With our extensive
          expertise and innovative mindset.
        </h5>
        <div className="flex  gap-10 my-6 text-xl">
        <a href="#about"><button className="border py-4 px-6 rounded-xl bg-[#6674CC] text-white hover:shadow-lg hover:shadow-[#6674CC] ">Know More</button></a>
        <button className="border py-4 px-6 rounded-xl bg-[#6674CC] text-white hover:shadow-lg hover:shadow-[#6674CC] ">Watch Video</button>
        </div>
        <div className="flex -space-x-6 pt-6 pb-6">
          <img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=" className="w-[4rem] h-[4rem] rounded-full "/>
          <img src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg" className="w-[4rem] h-[4rem] rounded-full"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" className="w-[4rem] h-[4rem] rounded-full"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU" className="w-[4rem] h-[4rem] rounded-full"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL-tDETnOkV-m0Js-guvKltHPQaMuxEmLuw&usqp=CAU" className="w-[4rem] h-[4rem] rounded-full"/>
          <div className=" md:block hidden   pt-4 pl-10">
            <h3 className="text-2xl text-green-300">300 <span className="text-3xl">+</span> <span className=" text-[#363A45]">Satisfied Customers</span></h3>
            
          
          </div>
        </div>
        
      </div>

      <hr className="text-bold"></hr>
    </div>
    </>
  );
};

export default Hero;
