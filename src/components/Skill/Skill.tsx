import { NextPage } from "next";
import { Heading } from "@/components";
interface Props {}
const Skill: NextPage<Props> = () => {
  return (
    <section
      data-aos="fade-up"
      ata-aos-anchor-placement="top-bottom"
      id="portolio"
      className="container  mx-auto py-10 px-4 "
    >
      <Heading title="Skill" />
      <p className="text-gray-600 mt-10 mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          React.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-1/2"></div>
          </div>
        </div>
        <div>
          Next.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-1/3"></div>
          </div>
        </div>
        <div>
          Node.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-1/2"></div>
          </div>
        </div>
        <div>
          Express.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-8/12"></div>
          </div>
        </div>
        <div>
          Tailwind
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-1/4"></div>
          </div>
        </div>
        <div>
          Bootstrap
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-11/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
