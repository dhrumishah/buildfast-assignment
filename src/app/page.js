import Google from "../assets/google.svg";

export default function Login() {
  return (
    <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col justify-between items-start px-6 gap-2">
          <h2 className="text-[18px] sm:text-[36px] text-black font-bold sm:leading-[43.88px]">
            Sign In
          </h2>
          <p className="text-[16px] font-lato sm:leading-[19.2px] text-black">
            Sign in to your account
          </p>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <button className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 ">
            <div className="flex justify-between items-center">
              <img src={Google} alt="google" className="w-[14px] h-[14px]" />
              Sign in with Google
            </div>
          </button>
          {/* <button className="text-[12px] text-[#858585] w-[150px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 ">
            <div className="flex justify-between items-center">
              Sign in with Apple
            </div>
          </button> */}
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
                className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                placeholder="Password..."
              />
            </div>
            <p className="text-[#346BD4] cursor-pointer">Forgot password?</p>
            <button className="bg-[#4285F4] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
              Sign In
            </button>
          </form>
        </div>
        <p className="text-[#858585] mx-auto">
          Don’t have an account?{" "}
          <span className="text-[#346BD4] cursor-pointer">Register here</span>
        </p>
      </div>
    </div>
  );
}
