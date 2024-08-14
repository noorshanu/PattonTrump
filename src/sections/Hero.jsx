function Hero() {
  return (
    <section className=" pt-4  pb-[4rem]">
      <div className="container-wrapper">
        <h1 className=" font-groot-one text-2xl text-center sm:text-3xl font-semibold my-4 max-w-full sm:max-w-3xl mx-auto text-[#ffffff] border-2 border-[#000000] rounded-2xl bg-[#029586cf] sm:text-[#ffffff] ">
          Patton Trump laughter meets profits, and the bark leads to the moon!
        </h1>
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <div>
                <img
                  src="images/hero3.jpeg"
                  alt=""
                  className=" mx-auto floating hidden sm:block rounded-3xl  border-4  border-black"
                />
              </div>
            </div>
            <div className=" w-full ">
              <div>
                <img
                  src="images/hero.jpeg"
                  alt=""
                  className=" mx-auto rounded-3xl  border-4  border-black "
                />
              </div>
            </div>

            <div className=" w-full hidden sm:block">
              <div>
                <img
                  src="images/hero2.jpeg"
                  alt=""
                  className=" mx-auto floating h-[280px] rounded-3xl  border-4  border-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" py-2">
          <a
            href="https://solscan.io/token"
            target="_blank"
            className="my-2 font-groot-one flex justify-center text-xs  text-white  border-[#000000] sm:text-lg font-semibold border-2  rounded-2xl bg-[#029586cf] max-w-xl py-1 mx-auto"
          >
            {" "}
            Contract : 9NwPQr4Ji5mJGXAPka11JMKgob9DwDedBXeZMzKwarB6
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://t.me/PattonTrump_sol"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#ffffffcf] shadow-lg shadow-black/40 text-black  font-bold  border-[#000000] border-2"
          >
            join telegram
          </a>

          <a
            href="https://www.dextools.io/app/en/"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#ffffffcf] shadow-lg shadow-black/40 text-black  font-bold  border-[#000000] border-2"
          >
            DEXTOOLS
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
