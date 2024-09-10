import { TiTle } from "./BlogCard";

export const AllBlog = ({ articles }) => {
  return (
    <div className=" ml-[160px] mt-24 container w-full m-auto">
      <div className=" flex justify-center items-start flex-col gap-8">
        <h2 className="text-2xl font-bold">All Blog Post</h2>
        <div className="flex gap-8">
          <div className="flex gap-5">
            <div className="flex gap-5">
              <h2 className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100">
                All
              </h2>
              <h2 className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100">
                Design
              </h2>
              <h2 className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100">
                Travel
              </h2>
              <h2 className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100">
                Fashion
              </h2>
              <h2 className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100">
                Technology
              </h2>
              <h2 className=" text-[#495057] font-bold text-[12px] hover:text-[#D4A373] duration-100">
                Branding
              </h2>
            </div>
          </div>
          <div>
            <button>
              <h2 className="text-[#495057]  font-bold text-[12px] hover:text-[#D4A373] duration-100">
                View All
              </h2>
            </button>
          </div>
        </div>
        <div className="flex  justify-between gap-5 ">
          <TiTle articles={articles} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
