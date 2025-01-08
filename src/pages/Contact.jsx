import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" flex flex-col justify-center items-center p-10 px-20 bg-blue-300 rounded-lg ">
        <h1 className="text-2xl font-semibold mb-5 text-white ">Contact Us</h1>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-2 "
        >
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Enter your name"
            className="py-2 w-full pl-2 rounded-md "
          />
          <label htmlFor=""></label>
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 w-full pl-2 rounded-md "
          />
          <label htmlFor=""></label>
          <textarea
            name=""
            id=""
            placeholder="Enter your message"
            className="pl-2 pt-1 rounded-md  w-full "
          ></textarea>
          <button className="bg-blue-700 rounded-md px-4 py-2 hover:bg-blue-400 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
