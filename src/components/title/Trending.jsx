import Link from "next/link";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [article, setArticle] = useState([]);
  const fetchData = () => {
    fetch(`http://dev.to/api/articles?per_page=4&top=3`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-auto mt-10">
      <div className="container h-auto m-auto flex justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Trending</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 h-full">
            {article.map((article) => {
              return (
                <Link href={`/blogpost/${article.id}`}>
                  <div
                    className={`rounded-lg w-[289px] h-[320px] flex justify-end flex-col bg-[#18191b] bg-blend-soft-light `}
                    style={{
                      backgroundImage: `url(${article.cover_image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex flex-col  p-6 gap-4">
                      <h2 className="text-[#FFFFFF] border-2 rounded-md w-[90px] border-none text-[14px] bg-blue-500 ">
                        {article.tag_list[0]}
                      </h2>
                      <h2 className="font-semibold line-clamp-2 text-[#FFFFFF]">
                        {article.description}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
