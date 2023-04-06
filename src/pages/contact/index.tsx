import { NextPage } from "next";
import { About, AppHead, Header, Skill, WhatIDo, Work } from "@/components";

interface Props {}
const Contact: NextPage<Props> = () => {
  return (
    <div>
      <AppHead title="Contact" />
      <Header />
      <About />
      <Skill />
      <Work />
      <WhatIDo />
    </div>
  );
};
export default Contact;
