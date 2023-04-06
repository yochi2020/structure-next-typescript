import { NextPage } from "next";
interface Props {
  title: string;
}
const Heading: NextPage<Props> = (props) => {
  const { title } = props;
  return (
    <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
      {title}
      <div className="bg-[#ff4D41] w-[40px] h-[2px] translate-y-1"></div>
    </div>
  );
};
export default Heading;
