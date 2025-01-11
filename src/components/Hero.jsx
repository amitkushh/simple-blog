import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center py-28 border-b-8 border-black px-20 mx-auto">
        <span className="capitalize text-xl mb-4 text-center">
          World's best online blog app
        </span>
        <h1 className="capitalize text-6xl font-semibold mb-6 text-center leading-[140%]">
          where all posibilities{" "}
          <span className="bg-gradient-to-t from-[#000957] to-[#344CB7] bg-clip-text text-transparent font-bold">
            Meet
          </span>
        </h1>
        <p className="text-[20px] max-w-[600px] text-center capitalize">
          This is the best platform for blogger. here you can post all type of
          blog post, no restriction. post any type of content here.
        </p>
        <div className="flex justify-center items-center gap-4 mt-11">
          <button className="bg-[#1a1a1a] text-xl rounded-md px-4 py-2 hover:bg-black text-white">
            Demo
          </button>
          <Link to="/sign-up">
            <button className="bg-gradient-to-t from-[#000957] to-[#344CB7] hover:from-[#344CB7] hover:to-[#000957] rounded-md px-4 py-2 hover:bg-blue-400 text-white text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
