import { NextPage } from "next";
import Marquee from "react-fast-marquee";
import { Heading } from "@/components";
interface Props {}
const Skill: NextPage<Props> = () => {
  return (
    <section
      data-aos="fade-up"
      ata-aos-anchor-placement="top-bottom"
      id="portolio"
      className="container  mx-auto h-screen py-10 px-4 "
    >
      <Heading title="Skill" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          React.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#009688] absolute h-[4px] w-1/2"></div>
          </div>
        </div>
        <div>
          Next.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#009688] absolute h-[4px] w-1/3"></div>
          </div>
        </div>
        <div>
          Node.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#009688] absolute h-[4px] w-1/2"></div>
          </div>
        </div>
        <div>
          Express.js
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#009688] absolute h-[4px] w-8/12"></div>
          </div>
        </div>
        <div>
          Tailwind
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#009688] absolute h-[4px] w-1/4"></div>
          </div>
        </div>
        <div>
          Bootstrap
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#009688] absolute h-[4px] w-11/12"></div>
          </div>
        </div>
      </div>
      <Marquee className=" mt-16" speed={50}>
        <img
          src="https://ubunlog.com/wp-content/uploads/2020/04/about-nodejs.png"
          width={100}
          height={100}
          alt=""
          className="mr-10"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIqLyH0k2yuOEwa9kpww8_kdo9j4WKDf2xZ2hzIPGRLTj6A0atmNK1hkci4vTwwW_318&usqp=CAU"
          width={100}
          height={100}
          alt=""
          className="mr-10"
        />
        <img
          src="http://www.thaiall.com/java/bootstrap-stack.png"
          width={100}
          height={100}
          alt=""
          className="mr-10"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/2560px-TypeScript_Logo_%28Blue%29.svg.png"
          width={100}
          height={100}
          alt=""
          className="mr-10"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          width={100}
          height={100}
          alt=""
          className="mr-10"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
          width={100}
          height={100}
          alt=""
          className="mr-10"
        />
        <img
          src="http://www.thaiall.com/java/bootstrap-stack.png"
          width={100}
          height={100}
          alt=""
        />
      </Marquee>
    </section>
  );
};
export default Skill;
