import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex rounded-2xl flex-col items-center mx-auto">
          <form className="flex flex-col text-black px-10 py-6 gap-4">
            <div className="flex flex-col justify-between gap-2">
              <h1 className="text-[16px] font-lato leading-[19.2px]">
                Email Address
              </h1>
              <input
                className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                placeholder="Email..."
              />
            </div>

            <button className="bg-[#4285F4] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
