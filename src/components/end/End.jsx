import Link from "next/link";
import { NormalText } from "../need/NormalText";
export const End = () => {
  return (
    <div className="container m-auto py-[64px] max-w-[1230px] w-full">
      <div className="flex justify-between ">
        <div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-[18px] text-[#181A2A]">About </h2>
            <h2 className="text-base text-[#696A75] font-normal w-[280px] h-[120px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </h2>
          </div>
          <div>
            <h2 className="text-base font-normal">
              Email : info@jstemplate.net
            </h2>
            <h2 className="text-base font-normal">Phone : 880 123 456 789</h2>
          </div>
        </div>
        <div>
          <Link href={"/"}>
            <NormalText text={"Home"} />
          </Link>
          <Link href={"blogpost"}>
            <NormalText text={"Blog"} />
          </Link>
          <Link href={"contactpage"}>
            <NormalText text={"Contact"} />
          </Link>
        </div>
        <div className="flex gap-5 max-w-[280px] w-full justify-end">
          <img className="w-4 h-4" src="./Negative copy 3.png" alt="" />
          <img className="w-4 h-4" src="./Negative copy 2.png" alt="" />
          <img className="w-4 h-4" src="./Negative copy.png" alt="" />
          <img className="w-4 h-4" src="./Negative.png" alt="" />
        </div>
      </div>
    </div>
  );
};
