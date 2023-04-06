import { NextPage } from "next";
import { Heading } from "@/components";
import { RiLightbulbFlashLine } from "react-icons/ri";
interface Props {}
const WhatIDo: NextPage<Props> = () => {
  return (
    <section
      data-aos="fade-up"
      ata-aos-anchor-placement="top-center"
      className="container mx-auto py-10 px-14  "
    >
      <Heading title="Whai I Do" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="shadow-lg  flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white hover:opacity-75 hover:scale-105 transform transition duration-300">
          <RiLightbulbFlashLine className="text-[20px]" />
          <h2 className="font-medium text-[20px]">Creative Design</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
        </div>
        <div className="shadow-lg  flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white hover:opacity-75 hover:scale-105 transform transition duration-300 ">
          <RiLightbulbFlashLine className="text-[20px]" />
          <h2 className="font-medium text-[20px]">Creative Design</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
        </div>
        <div className="shadow-lg  flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white hover:opacity-75 hover:scale-105 transform transition duration-300">
          <RiLightbulbFlashLine className="text-[20px]" />
          <h2 className="font-medium text-[20px]">Creative Design</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhatIDo;
