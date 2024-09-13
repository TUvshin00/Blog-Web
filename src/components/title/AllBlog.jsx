import { TiTle } from "./BlogCard";
import Link from "next/link";

export const AllBlog = ({ articles, handleFilter }) => {
  return (
    <div className=" ml-[160px] mt-24 w-full m-auto">
      <div className="container  flex justify-center items-start flex-col gap-8">
        <h2 className="text-2xl font-bold">All Blog Post</h2>
        <div className="flex gap-8">
          <div className="flex gap-5">
            <div className="flex gap-5">
              <button
                onClick={() => handleFilter("")}
                className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100"
              >
                All
              </button>
              <button
                onClick={() => handleFilter("design")}
                className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100"
              >
                Design
              </button>
              <button
                onClick={() => handleFilter("travel")}
                className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100"
              >
                Travel
              </button>
              <button
                onClick={() => handleFilter("fashion")}
                className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100"
              >
                Fashion
              </button>
              <button
                onClick={() => handleFilter("technology")}
                className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100"
              >
                Technology
              </button>
              <button
                onClick={() => handleFilter("branding")}
                className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100"
              >
                Branding
              </button>
              <Link href={"/blogpost"}>
                <button className="text-[#495057]  font-bold text-[12px] hover:text-[#D4A373] duration-100">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex  justify-between gap-5 ">
          <TiTle articles={articles} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
