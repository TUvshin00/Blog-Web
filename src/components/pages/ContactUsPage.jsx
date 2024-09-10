import { End } from "../end";
import { Header } from "../header";
import { InPut } from "../title";
export const ContactUsPage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <div className=" flex justify-center gap-[60px] flex-col items-center">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="w-[624px] h-[102px] text-[#696A75] text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-[50px] items-center">
            <div className="p-4 flex flex-col gap-3 border-2 rounded-xl">
              <h2 className=" text-2xl font-bold">Adress</h2>
              <p className="text-[#696A75] text-base w-[240px] h-[52px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="p-4 w-[276px] flex flex-col gap-3 border-2 rounded-xl">
              <h2 className=" text-2xl font-bold">Contact</h2>
              <p className="text-[#696A75] text-base w-[200px] h-[52px]">
                313-332-8662 Info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div>
            <div className="flex flex-col gap-6 pl-[35px] pt-[29px] pr-[130px] pb-[26px] bg-[#F6F6F7] rounded-[10px] w-full">
              <h1 className="font-workSans font-semibold not-italic text-lg">
                Leave a Message
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-between">
                  <InPut
                    classEdit={"w-[225px] h-[38px]"}
                    placeholder={"Your Name"}
                  />
                  <InPut
                    classEdit={"w-[225px] h-[38px]"}
                    placeholder={"Your Email"}
                  />
                </div>
                <InPut classEdit={"w-full h-[38px]"} placeholder={"Subject"} />
                <div className="h-auto bg-white rounded-[5px] border border-[#DCDDDF] p-[14px] pl-5 ">
                  <textarea
                    type="text"
                    className="flex items-start justify-start font-workSans font-normal not-italic text-base text-[#97989F] h-full w-full pb-[100px] outline-none flex-wrap"
                    placeholder="Write a message"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <End />
    </div>
  );
};
