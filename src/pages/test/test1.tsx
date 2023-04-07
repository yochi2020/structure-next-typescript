import { About, WhatIDo } from "@/components";
import { NextPage } from "next";
import { FaReact } from "react-icons/fa";
interface Props {}
const T1: NextPage<Props> = () => {
  return (
    <>
      <div className="w-full h-screen  bg-cover bg-center
       bg-[url('https://www.pcclean.io/wp-content/uploads/2020/4/fABJry.jpg')]
      background-image:linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75))">
        <div className="w-[85%] m-auto py-35 flex  items-center justify-between p-4">
          <FaReact className="w-[40px] h-full" />
          {/* <img src="" alt="" /> */}
          <ul className="">
            <li className="inline-block mx-10 relative after:content-['']
            after:h-[3px] after:w-0 after:duration-300 after:ease-out after:bg-[#009688]
             after:absolute after:left-0 after:-bottom-[4px] hover:after:w-full">
              <a href="#" className="uppercase text-[#fff] no-underline">
                Home
              </a>
            </li>
            <li className="inline-block mx-10 relative after:content-['']
            after:h-[3px] after:w-0 after:duration-300 after:ease-out after:bg-[#009688]
             after:absolute after:left-0 after:-bottom-[4px] hover:after:w-full">
              <a href="#" className="uppercase text-[#fff] no-underline">
                Bedroom
              </a>
            </li>
            <li className="inline-block mx-10 relative after:content-['']  after:h-[3px]
             after:w-0 after:duration-300 after:ease-out after:bg-[#009688] after:absolute
             after:left-0 after:-bottom-[4px] hover:after:w-full">
              <a href="#" className="uppercase text-[#fff] no-underline">
                Dining
              </a>
            </li>
            <li className="inline-block mx-10 relative after:content-['']
            after:h-[3px] after:w-0 after:duration-300 after:ease-out after:bg-[#009688]
            after:absolute after:left-0 after:-bottom-[4px] hover:after:w-full">
              <a href="#" className="uppercase text-[#fff] no-underline">
                Kitchen
              </a>
            </li>
            <li className="inline-block mx-10 relative after:content-['']
            after:h-[3px] after:w-0 after:duration-300 after:ease-out after:bg-[#009688]
            after:absolute after:left-0 after:-bottom-[4px] hover:after:w-full">
              <a href="#" className="uppercase text-[#fff] no-underline">
                Backyard
              </a>
            </li>
          </ul>
        </div>
        <div className=" absolute top-[50%] translate-y-1/2 text-center text-[#fff] w-full">
          <h1 className="text-[70px] my-[20px] leading-6 font-bold">
            Design YOUR HOUSE
          </h1>
          <p className="mt-10">
            Subscribe Easy Tutorials Youtube Chanel to watch more{" "}
          </p>
          <button className=" w-[200px] py-4 text-center bg-transparent border border-[#009688]
          my-5 text-[#fff] cursor-pointer font-bold rounded-3xl mx-3 relative overflow-hidden hover:border-none group">
            <span className="bg-[#009688] h-full w-0 rounded-lg absolute left-0 transition-all
             duration-300 bottom-0 -z-[1] group-hover:w-full"></span>
            WATCH MORE
          </button>
          <button className=" w-[200px] py-4 text-center bg-transparent border border-[#009688]
           my-5 text-[#fff] cursor-pointer font-bold rounded-3xl mx-3 relative overflow-hidden hover:border-none group">
            <span className="bg-[#009688] h-full w-0 rounded-lg absolute left-0
            transition-all duration-300 bottom-0 -z-[1] group-hover:w-full"></span>
            SUBSCRIBE
          </button>
        </div>
      </div>
      <About />
      <WhatIDo />
    </>
  );
};
export default T1;
