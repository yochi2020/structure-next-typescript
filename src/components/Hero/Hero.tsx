"use client";
import { NextPage } from "next";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/index";
interface Props {}
const Hero: NextPage<Props> = () => {
  return (
    <section
      id="hero"
      className="bg-[url('https://c4.wallpaperflare.com/wallpaper/754/541/105/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg')] h-screen  bg-cover bg-fixed flex items-center "
    >
      <div className=" container mx-auto px-4 ">
        <div className=" max-w-[450px] text-white flex flex-col">
          <div>
            <h1 className="text-5xl"> I&apos;m Chanaphat</h1>
            <h4 className="text-2xl mt-3">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className="bg-[#ff4D41] h-[2px] w-[40px]"></div>
          <div>
            <p>
              In a professionnal context it often happens that privete clients
              corder a publication to be made.
            </p>
            <Button type="button" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
