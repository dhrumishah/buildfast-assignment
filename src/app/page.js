"use client";
import Google from "../assets/google.svg";
import Image from "next/image";
import { auth, provider, database } from "@/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { set, ref } from "firebase/database";

export default function Login() {
  const router = useRouter();

  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        set(ref(database, "users/" + data.user.uid), {
          email: data.user.email,
        });
        localStorage.setItem("authenticated", true);
        router.push("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center overflow-x-auto">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col justify-between items-start px-6 gap-2">
          <h2 className="text-4xl text-white text-center w-full font-bold sm:leading-[43.88px]">
            Sign In
          </h2>
          <p className="text-[16px] font-lato sm:leading-5 text-black">
            Sign in to your account
          </p>
        </div>

        <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
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
            <div className="flex flex-col justify-between gap-2">
              <h1 className="text-[16px] font-lato leading-[19.2px]">
                Password
              </h1>
              <input
                className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-10 px-6 rounded-xl"
                placeholder="Password..."
              />
            </div>
            <button className="bg-[#4285F4] rounded-xl w-[280px] sm:w-[325px] h-10 mt-4 font-bold text-white">
              Sign In
            </button>
          </form>
        </div>

        {/* Google Sign In */}
        <div className="flex justify-center items-center gap-2">
          <button className="text-xs text-[#858585] w-fit mt-4 rounded-lg bg-white h-10 px-4">
            <div
              className="flex justify-between items-center w-full gap-2"
              onClick={signIn}
            >
              <Image src={Google} alt="google" className="w-3.5 h-3.5" />
              <p>Sign In With Google</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
