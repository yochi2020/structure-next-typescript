import { NextPage } from "next";
import Typewriter from "typewriter-effect";

interface Props {}
const Hero2: NextPage<Props> = () => {
  return (
    <div className="h-screen bg-cover bg-fixed  bg-[url('https://www.pcclean.io/wp-content/uploads/2020/4/fABJry.jpg')]">
      <div className=" absolute top-[60%] translate-y-1/2 text-center text-[#fff] w-full">
        <h1 className="text-[70px] my-[20px] leading-6 font-bold">Hello</h1>

        <Typewriter
          options={{
            strings: ["i'm Developer"],
            autoStart: true,
            loop: true,
          }}
        />
        {/* <Link
            href={"#about"}
            className=" w-[200px] p-4  rounded-3xl text-center bg-transparent border border-[#009688] my-5 text-[#fff] cursor-pointer font-bold  mx-3 relative overflow-hidden hover:border-none group"
          >
            <span className="bg-[#009688] rounded-full h-full w-0  absolute left-0 transition-all duration-300 bottom-0 -z-[1] group-hover:w-full"></span>
            WATCH MORE
          </Link>
          <button className=" w-[200px] p-4 text-center bg-transparent border border-[#009688] my-5 text-[#fff] cursor-pointer font-bold rounded-3xl mx-3 relative overflow-hidden hover:border-none group">
            <span className="bg-[#009688] h-full w-0 rounded-lg absolute left-0 transition-all duration-300 bottom-0 -z-[1] group-hover:w-full"></span>
            SUBSCRIBE
          </button> */}
      </div>
    </div>
  );
};
export default Hero2;
