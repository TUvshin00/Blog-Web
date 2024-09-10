import { BlogIcon } from "../need/BlogIcon";
import { NormalText } from "../need/NormalText";
import Link from "next/link";
export const Header = () => {
  return (
    <div className=" flex justify-center items-center py-8 px-[350px]  ">
      <div className="flex justify-between gap-[360px] ">
        <div className="flex justify-start items-center">
          <Link href={"../"}>
            <BlogIcon />
          </Link>
        </div>
        <div className="flex justify-between items-end mr-[100px] w-[630px] gap-[21px]">
          <div className="flex gap-10 items-center justify-center">
            <p>aaaaa</p>
            <button className="flex gap-10">
              <Link href={"/"}>
                <NormalText text={"Home"} />
              </Link>
              <Link href={"/blogpost"}>
                <NormalText text={"Blog"} />
              </Link>
              <Link href={"/contactpage"}>
                <NormalText text={"Contact"} />
              </Link>
            </button>
          </div>
          <div className="flex gap-3 items-center rounded bg-[#F4F4F5] outline-none">
            <input
              className="bg-[#F4F4F5] w-[114px] h-[36px] rounded outline-none"
              type="text"
              placeholder="Search"
            />
            <button>
              <img src="./search-outline.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
