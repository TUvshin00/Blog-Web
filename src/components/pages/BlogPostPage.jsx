import { useEffect, useState } from "react";
import { End } from "../end";
import { Header } from "../header";
import { TiTle } from "../title";
import Link from "next/link";

export const BlogPostPage = () => {
  const [contentNumber, setContentNumber] = useState(21);
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`http://dev.to/api/articles?per_page=${contentNumber}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [contentNumber]);
  return (
    <div className=" container m-auto flex flex-col gap-[100px] ">
      <Header />
      <div className=" px-[100px] flex flex-col gap-5 ">
        <div className="">
          <h2 className="ml-[50px] text-2xl font-bold">All Blog Post</h2>
        </div>
        <div className=" flex items-center flex-col gap-5">
          <TiTle articles={articles} />
        </div>
        <div className="flex justify-between ">
          <End />
        </div>
      </div>
    </div>
  );
};
