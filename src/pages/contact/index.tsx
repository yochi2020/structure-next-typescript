import { NextPage } from "next";
import { About, AppHead, Header, Skill, WhatIDo, Work,Hero2 } from "@/components";
import Layout from "@/layouts/Layout";
interface Props {}
const Contact: NextPage<Props> = () => {
  return (
    <Layout>
      <AppHead title="Contact" />
      <Header />
      <Hero2 />
      <About />
      <Skill />
      <Work />
      <WhatIDo />
    </Layout>
  );
};
export default Contact;
