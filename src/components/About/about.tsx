import { NextPage } from "next";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbPacman } from "react-icons/tb";
import { Button, Heading } from "@/components";
interface Props {}
const About: NextPage<Props> = () => {
  return (
    <section
      data-aos="fade-up"
      ata-aos-anchor-placement="top-bottom"
      id="about"
      className="container mx-auto py-10 px-14   "
    >
      <Heading title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className=" ">
          <img
            src={"https://avatars.githubusercontent.com/u/67066713?v=4"}
            alt=""
            className=" hover:shadow-lg hover:opacity-75 hover:scale-110  transition duration-500 ease-in-out"
          />
        </div>
        <div>
          <div className="flex items-center  justify-between w-[300px]   ">
            <div className="flex flex-col gap-6 ">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className="text-[#009688] text-[22px]" />
                Birthday
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className="text-[#009688] text-[22px]" />
                Study
              </div>
              <div className="flex gap-4 items-center font-medium">
                <BsGlobe2 className="text-[#009688] text-[22px]" />
                Website
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className="text-[#009688] text-[22px]" />
                Interest
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className="text-[#009688] text-[22px]" />
                Location
              </div>
            </div>
            <div className="flex flex-col gap-6 ">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>27.09.1994</div>
              <div>University of chicago</div>
              <div>www.test.com</div>
              <div>Reading,Blogging</div>
              <div>4610 Riverwood</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">
              im Chanaphat Frontend Developer
            </h2>
            <p className="text-gray-600">
              Hi My name is Chanaphat im a web developer, and im
            </p>
            <Button type="button" text="Here Me" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
