import { NextPage } from "next";
import { Heading } from "@/components";
interface Props {
  title: string;
}
const Section: NextPage<Props> = (props) => {
  const { title } = props;
  return (
    <section className="h-screen w-screen py-10 ">
      <div className="container  mx-10">
        <Heading title={title} />
      </div>
    </section>
  );
};
export default Section;
