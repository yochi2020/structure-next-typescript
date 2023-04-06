import { NextPage } from "next";
interface Props {}
const Footer: NextPage<Props> = () => {
  return (
    <div className=" bg-[url('https://images8.alphacoders.com/115/thumbbig-1156488.webp')] bg-cover bg-center h-[200px] text-white grid place-items-center  ">
      <div className="text-center">
        <p>&copy; 2023 Chanaphat suzuki</p>
      </div>
    </div>
  );
};
export default Footer;
