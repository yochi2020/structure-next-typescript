import clientRoute from "@/common/clientRoute";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
interface Props {}
const Header: NextPage<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-screen fixed p-5 flex bg-gray-800 justify-between z-10 opacity-90">
      <div className="text-white uppercase">Header</div>
      <div className="hidden sm:flex">
        <ul className="flex">
          <li className=" mr-4  uppercase text-white relative after:absolute flex flex-col after:bottom-0   after:h-[2px] after:bg-green-500 after:content-[''] after:w-0 after:hover:w-full  after:duration-300">
            <Link href={clientRoute.main} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className=" mr-4  uppercase text-white relative after:absolute flex flex-col after:bottom-0   after:h-[2px] after:bg-green-500 after:content-[''] after:w-0 after:hover:w-full  after:duration-300">
            <Link href={clientRoute.contact} className="cursor-pointer">
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
            href={clientRoute.main}
            className="p-2 text-xl font-bold text-gray-800 hover:text-gray-100"
          >
            Home
          </Link>
          <Link
            href={clientRoute.contact}
            className="p-2 text-xl font-bold text-gray-800 hover:text-gray-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
