"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/Firebase";
const Home = () => {
  const router = useRouter();
  const logoutUser = async () => {
    localStorage.clear();
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  if (localStorage.getItem("authenticated") === "false") {
    router.push("/");
  }
  return (
    <div className="flex flex-col w-full h-screen gap-6 justify-center items-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex rounded-2xl flex-col items-center mx-auto">
          <div className="flex flex-col justify-between w-full rounded-lg py-6 gap-4">
            <div className="bg-gray-700 opacity-90 p-4 text-white-500 text-center text-base font-semibold">
              dhrumishah951@gmail.com
            </div>
          </div>
          <button
            className="bg-[#4285F4] rounded-xl w-72 sm:w-80 h-10 font-bold text-white"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
