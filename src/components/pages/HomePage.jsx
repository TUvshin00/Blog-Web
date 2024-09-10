import { Header } from "../header/Header";
import { Hero } from "../hero/Hero";
import { End } from "../end/End";
import { AllBlog } from "../title";
import { Trending } from "../title";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [contentNumber, setContentNumber] = useState(9);
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`http://dev.to/api/articles?per_page=${contentNumber}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [contentNumber]);

  const handleclickloadMore = () => {
    setContentNumber(contentNumber + 3);
  };
  return (
    <div className="container m-auto">
      <Header />
      <Hero />
      <Trending articles={articles} />
      <AllBlog articles={articles} />
      <button
        onClick={handleclickloadMore}
        className="ml-[729px] border-2 rounded-lg w-[100px] h-10 text-[16px]"
      >
        Load More
      </button>
      <End />
    </div>
  );
};
