import React from "react";

function Blog() {
  const blogs = [
    {
      img: "",
      category: "city",
      title: "top 10 cities of india",
      para: "Here i will show you top 10 cities of india, where you can live.",
    },
    {
      img: "",
      category: "city",
      title: "top 15 cities of usa",
      para: " Here i will show you top 10 cities of india, where you can live.",
    },
    {
      img: "",
      category: "city",
      title: "top 5 cities of uk",
      para: "Here i will show you top 10 cities of india, where you can live.",
    },
    {
      img: "",
      category: "city",
      title: "top 10 cities of india",
      para: "Here i will show you top 10 cities of india, where you can live.",
    },
    {
      img: "",
      category: "city",
      title: "top 10 cities of india",
      para: "Here i will show you top 10 cities of india, where you can live.",
    },
    {
      img: "",
      category: "city",
      title: "top 10 cities of india",
      para: "Here i will show you top 10 cities of india, where you can live.",
    },
  ];
  return (
    <section>
      <div className="px-20 mx-auto py-28 flex flex-col justify-center items-center border-b-8 border-black">
        <h2 className="text-4xl font-semibold mb-10">Find Favorite Blogs</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              className="flex flex-col bg-slate-200 rounded-md p-10 "
              key={index}
            >
              <div>
                <img src={blog.img} alt="" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-2xl capitalize font-semibold mb-3">
                  {blog.title}
                </p>
                <p className="mb-4">{blog.para}</p>
                <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-xl">
                  {blog.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
