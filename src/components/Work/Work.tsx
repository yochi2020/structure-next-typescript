import { NextPage } from "next";
import Heading from "../Heading/Heading";
interface Props {}
const Work: NextPage<Props> = () => {
  return (
    <section id="blog" className="container mx-auto py-10 px-4 ">
      <Heading title="Creative Works" />
      <div className="grid grid-cols-3 gap-4">
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
        <div className=" relative group">
          <img
            src="https://avatars.githubusercontent.com/u/67066713?v=4"
            alt=""
          />
          <div className="bg-[#000000bd] h-full absolute w-full top-0 opacity-0 transition duration-500 group-hover:opacity-75 grid place-items-center text-white">
            project Titlesss
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
