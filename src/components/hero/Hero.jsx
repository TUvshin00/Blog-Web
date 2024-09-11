import Link from "next/link";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [article, setArticle] = useState([]);
  const fetchData = () => {
    fetch(`http://dev.to/api/articles?per_page=10&top=7`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  const handlePlusPage = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === article.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };
  const handleMinusPage = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return currentIndex.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex justify-center mt-[100px]  ">
      <div className=" container max-w-[1216px]">
        <Link href={`/blogpost/${article[currentIndex]?.id}`}>
          <div
            className="h-[600px] bg-cover bg-center rounded-3xl flex items-end"
            style={{
              backgroundImage: `url(${article[currentIndex]?.cover_image})`,
            }}
          >
            <div className=" w-full bg-slate-50 pl-5 ml-3 mb-3 mr-3 rounded-lg pt-5 pd-5 flex flex-col gap-3"></div>
          </div>
        </Link>

        <div className="flex justify-end  gap-[10px] mt-4">
          <button
            onClick={handleMinusPage}
            className="  flex justify-center items-center w-10 h-10 border-2 rounded-md"
          >
            <img src="./Icon (1).png" alt="" />
          </button>
          <button
            onClick={handlePlusPage}
            className="  flex justify-center items-center w-10 h-10 border-2 rounded-md"
          >
            <img src="./Icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
