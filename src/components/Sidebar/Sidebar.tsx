import { NextPage } from "next";
import { RiCloseFill } from "react-icons/ri";
interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar: NextPage<Props> = (props) => {
  const { isOpen, toggleSidebar } = props;
  return (
    <div
      className={`h-screen w-screen  bg-gray-800 ${
        isOpen ? "fixed  " : " hidden "
      } grid place-items-center text-white z-20 opacity-95 transition-all `}
    >
      <div
        className="absolute top-0 right-0 mr-[18px] mt-[25px] text-[24px] hover:cursor-pointer "
        onClick={toggleSidebar}
      >
        <RiCloseFill />
      </div>

      <div className="flex flex-col gap-4 text-[24px]">
        <a className="hover:#ff4D41" href="#hero">
          Home
        </a>
        <a className="hover:#ff4D41" href="#about">
          About
        </a>
        <a className="hover:#ff4D41" href="#portolio">
          Portfolio
        </a>
        <a className="hover:#ff4D41" href="#blog">
          Blogs
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
