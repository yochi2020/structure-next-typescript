import { NextPage } from "next";
import { HiMenu } from "react-icons/hi";

interface Props {
  toggleSidebar: () => void;
}
const Navbar: NextPage<Props> = (props) => {
  const { toggleSidebar } = props;
  return (
    <div className="w-[100%] fixed z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-[24px] ">Eva Route</div>
        <div className="gap-2 hidden md:flex">
          <a href="#hero">Home</a>
          <a href="#about">about</a>
          <a href={"#portolio"}>Portolio</a>
          <a href={"#blog"}>Blog</a>
        </div>

        <a
          href="#"
          className="hidden md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] items-center gap-2 rounded-[5px] hover:bg-[#ff4D41] hover:text-white transition duration-200"
        >
          Dowload CV
        </a>

        <button className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <HiMenu />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
