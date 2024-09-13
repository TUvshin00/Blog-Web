import { Hero } from "../hero/Hero";

import { AllBlog } from "../title";
import { Trending } from "../title";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [contentNumber, setContentNumber] = useState(9);
  const [articles, setArticles] = useState([]);
  const [allBlogPost, setAllBlogPost] = useState("");

  const fetchData = () => {
    fetch(
      `http://dev.to/api/articles?per_page=${contentNumber}&top=7&tag=${allBlogPost}`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [contentNumber, allBlogPost]);

  const handleFilter = (allBlog) => {
    setAllBlogPost(allBlog);
  };
  const handleclickloadMore = () => {
    setContentNumber(contentNumber + 3);
  };
  return (
    <div className="container m-auto">
      <Hero />
      <Trending articles={articles} />
      <AllBlog articles={articles} handleFilter={handleFilter} />
      <button
        onClick={handleclickloadMore}
        className="ml-[729px] border-2 rounded-lg w-[100px] h-10 text-[16px]"
      >
        Load More
      </button>
    </div>
  );
};
