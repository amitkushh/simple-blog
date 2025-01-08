import React from "react";

function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center py-28 border-b-8 border-black px-20 mx-auto">
        <span className="capitalize text-xl mb-4">
          World's best online blog app
        </span>
        <h1 className="capitalize text-6xl font-semibold mb-6">
          where all posibilities{" "}
          <span className="bg-blue-600 px-4 text-white">Meet</span>
        </h1>
        <p className="text-[20px] max-w-[600px] text-center">
          This is th best platform for blogger. here you can post all type of
          blog post, no restriction. post any type of content here.
        </p>
        <div className="flex justify-center items-center gap-4 mt-11">
          <button className="bg-[#1a1a1a] text-xl rounded-md px-4 py-2 hover:bg-black text-white">
            Demo
          </button>
          <button className="bg-blue-700 rounded-md px-4 py-2 hover:bg-blue-400 text-white text-xl">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
