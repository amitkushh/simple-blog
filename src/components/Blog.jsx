import React from "react";
import { useState, useEffect } from "react";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2025-01-17&sortBy=publishedAt&apiKey=${
        import.meta.env.VITE_FETCH_DATA
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Https error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setArticles(json.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <div className="px-10 mx-auto py-20 flex flex-col justify-center items-center border-b-2 border-black">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Find Favorite Blogs
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <div
              className="flex flex-col bg-slate-200 rounded-md p-10 "
              key={index}
            >
              <div>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="mb-5"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-2xl capitalize font-semibold mb-3">
                  {article.title}
                </p>
                <p className="mb-4">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
