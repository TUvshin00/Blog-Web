import Link from "next/link";

export const TiTle = ({ articles }) => {
  return (
    <div className="w-[1230px] h-auto mt-10">
      <div className="container h-auto gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles?.map((article) => {
            return (
              <Link href={`/blogpost/${article.id}`}>
                <div className="p-6 border-2 h-[476px] rounded-lg cursor-pointer hover:shadow-md">
                  <div className="overflow-hidden rounded-md w-[350px] h-[160px]">
                    <img
                      className="hover:scale-110 duration-150 rounded-md "
                      src={article?.cover_image}
                      alt=""
                    />
                  </div>
                  <h2 className="text-[#4B6BFB] w-[90px] bg-gray-1200 border-none border-2 rounded-lg mt-10 text-[14px] ">
                    {article?.tag_list[0]}
                  </h2>

                  <h2 className="font-semibold line-clamp-3 w-[344px] text-[24px] text-[#181A2A]">
                    {article?.description}
                  </h2>
                  <h2 className="mt-[60px] text-base text-[#696A75] font-normal">
                    August 20, 2022
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
