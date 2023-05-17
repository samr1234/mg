
import { useState } from "react";
const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");

function register(e){
e.preventDefault();
  if(!name && !email && !subject && !message){
    
    alert("enter all fields")
  }
  else{

    alert("Thank you for contacting us, we will get back to you shortly")
  }
}

  return (
    <div id="contact" className="sm:min-h-screen pt-[6rem] bg-gradient-to-r from-[#f0f2f0] via-white to-[#F0EEFF]">
      <h1 className="flex justify-around text-5xl pt-12 pb-10 font-bold text-blue-500">Contact Us</h1>
      <div className="sm:flex justify-around items-center">
        <div className="">
          <img src="/contact1.png" alt="" className="w-full h-[30rem] " />
          
        </div>
        <form className="flex flex-col ml-12" onSubmit={register}>
          
          <input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id="" placeholder="name" />
   
          <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" placeholder="email" />
        
          <textarea
          onChange={(e)=>{setSubject(e.target.value)}}
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="subject"
          ></textarea>
          

          <textarea
          onChange={(e)=>{setMessage(e.target.value)}}
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="message"
          ></textarea>
          <button className="border border-red-100 block mx-auto px-3 py-2 text-xl hover:text-white hover:bg-cyan-400 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
