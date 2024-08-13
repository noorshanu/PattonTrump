import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
          About Us
        </h2>

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px]">
            {/* <RoadmapCards /> */}
            <img
              src="images/hero3.jpeg"
              alt=""
              className=" rounded-3xl shadow-lg border-4 border-black"
            />
          </div>
          <div className=" max-w-xl">
            <p className="font-semibold font-groot-one text-xl sm:text-3xl text-black  py-2">
              Welcome to Patton Trump on Solana!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-black  font-medium">
              Meet Patton Trump, the legendary dog meme coin on Solana! With a
              bark louder than a rocket launch and a sense of humor that's
              infectious, Patton Trump brings energy, fun, and serious gains to
              the table. Our community is as wild and enthusiastic as the coin
              itself, making every moment a celebration.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black font-medium">
              In a race against time, $PAT is your go-to for grabbing
              that special GEM for your moon bag
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
