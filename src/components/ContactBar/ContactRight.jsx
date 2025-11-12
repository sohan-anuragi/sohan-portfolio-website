import React, { useRef, useContext } from "react";
import { contextTheme } from "../Store";
import emailjs from '@emailjs/browser'

export default function ContactRight() {

  const { themeToggle } = useContext(contextTheme);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // 🔹 Page reload rokne ke liye



    emailjs.sendForm(
      'service_8oe5n7p',       // 🔹 Your Service ID
      'template_mclcv6s',      // 🔹 Your Template ID
      form.current,             // 🔹 Form data
      'OMWVwjkT_4X-3y6RB'      // 🔹 Your Public Key
    ).then((result) => {
        alert("Message sent successfully! ✅"); 
    }, (error) => {
        console.log(error.text);               // 🔹 Error handling
    });
  }

  return (
    <div className={`flex flex-col items-center justify-center ${themeToggle ? "text-white bg-[#1c1c1b]" : "text-black"} px-4 font-[Poppins] md:w-[60%]`}>
      
      <form 
        ref={form} 
        onSubmit={sendEmail}  
        className={`${themeToggle ? "bg-[#270a0a] shadow-lg shadow-[black]" : "bg-gray-100 shadow-lg shadow-gray-400"} rounded-2xl p-[2rem] pb-[4rem] w-[90%]`} 
      >
        <input
          type="text"
          name="name"                   
          placeholder="Your Name"
          className={`${themeToggle ? "bg-[#4b1313]" : "bg-[white]"} w-full mb-4 px-4 py-2 border border-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required                    
        />
        <input
          type="email"
          name="email"                  
          placeholder="Your Email"
          className={`${themeToggle ? "bg-[#4b1313]" : "bg-[white]"} w-full mb-4 px-4 py-2 border border-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        <input
          type="text"
          name="subject"           
          placeholder="Subject"
          className={`${themeToggle ? "bg-[#4b1313]" : "bg-[white]"} w-full mb-4 px-4 py-2 border border-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        <textarea
          name="message"          
          placeholder="Your Message"
          rows="4"
          className={`${themeToggle ? "bg-[#4b1313]" : "bg-[white]"} w-full mb-4 px-4 py-2 border border-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

