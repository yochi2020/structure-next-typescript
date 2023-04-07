import { NextPage } from "next";
import { Heading } from "@/components";
interface Props {
  title: string;
  children: React.ReactNode;
}
const Section: NextPage<Props> = (props) => {
  const { title, children } = props;
  return (
    <section className="h-full  w-screen py-10 ">
      <div className="container px-4 sm:mx-auto ">
        <Heading title={title} />
        {children}
      </div>
    </section>
  );
};
export default Section;
