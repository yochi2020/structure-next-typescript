import { NextPage } from "next";
import { About, AppHead, Header, Skill, WhatIDo, Work } from "@/components";
import Hero2 from "@/components/Hero/Hero2";

interface Props {}
const Contact: NextPage<Props> = () => {
  return (
    <div>
      <AppHead title="Contact" />
      <Header />
      <Hero2 />
      <About />
      <Skill />
      <Work />
      <WhatIDo />
    </div>
  );
};
export default Contact;
