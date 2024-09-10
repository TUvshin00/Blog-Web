import { useRouter } from "next/router";
import { End } from "../end";
import { Header } from "../header/Header";

import { useEffect, useState } from "react";

export const SinglePostPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [article]);

  return (
    <div className="flex flex-col gap-[100px] items-center">
      <Header />
      <div className="max-w-[800px] w-full flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="text-[#181A2A] text-4xl leading-10 font-semibold font-text">
            {article.title}
          </p>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <div
                style={{
                  backgroundImage: `url(${article?.user?.profile_image})`,
                  width: "28px",
                  height: "28px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="text-[#696A75] text-sm font-normal font-text">
                {article?.user?.name}
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div
          style={{
            background: `url(${article?.cover_image}) lightgray 50% / cover no-repeat`,
            width: "100%",
            height: "462px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        ></div>
        <p>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
        <div className="flex flex-col gap-4">
          <p>{article?.title}</p>
          <p>
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. In hendrerit gravida
            rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
            eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>{article.description}</p>
          <p>
            While it's essential to leave room for spontaneity and unexpected
            adventures, having a rough itinerary can help you make the most of
            your time and budget. Identify the must-see sights and experiences
            and prioritize them according to your interests and preferences.
            This will help you avoid overscheduling and ensure that you have
            time to relax and enjoy your journey. Vitae sapien pellentesque
            habitant morbi tristique. Luctus venenatis lectus magna fringilla.
            Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
            sodales neque sodales ut etiam sit amet.
          </p>
        </div>
      </div>
      <End />
    </div>
  );
};
