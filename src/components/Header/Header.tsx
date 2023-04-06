import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Typewriter from "typewriter-effect";
interface Props {}
const Header: NextPage<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="h-screen bg-cover bg-[url('https://www.pcclean.io/wp-content/uploads/2020/4/fABJry.jpg')]">
      <div className="w-screen p-5 flex justify-between  ">
        <div className="text-white uppercase">Header</div>
        <div className="hidden sm:flex">
          <ul className="flex">
            <li className=" mr-4  uppercase text-white relative after:absolute flex flex-col after:bottom-0   after:h-[2px] after:bg-green-500 after:content-[''] after:w-0 after:hover:w-full  after:duration-300">
              <Link href="/" className="cursor-pointer">
                Home
              </Link>
            </li>
            <li className=" mr-4  uppercase text-white relative after:absolute flex flex-col after:bottom-0   after:h-[2px] after:bg-green-500 after:content-[''] after:w-0 after:hover:w-full  after:duration-300">
              <Link href="/contact" className="cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="fixed top-5 right-4 sm:hidden  ">
          <HiMenuAlt3
            className="text-2xl cursor-pointer text-white"
            onClick={toggleMenuOpen}
          />
        </div>
        <div className=" absolute top-[50%] translate-y-1/2 text-center text-[#fff] w-full">
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
        <div
          className={`w-full h-full bottom-0 bg-gray-300  fixed grid place-items-center transition-all duration-300 ${
            menuOpen ? "left-[0%]" : " left-[100%]"
          }`}
        >
          <IoMdClose
            className="text-2xl cursor-pointer absolute top-5 right-4"
            onClick={toggleMenuOpen}
          />
          <div className="flex flex-col items-center">
            <Link
              href={"/"}
              className="p-2 text-xl font-bold text-gray-800 hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              href={"/contact"}
              className="p-2 text-xl font-bold text-gray-800 hover:text-gray-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
