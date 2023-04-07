import { NextPage } from "next";
import Image from "next/image";
interface Props {}
const Card: NextPage<Props> = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg
       transition duration-300 ease-in-out group cursor-pointer">
        <div className="overflow-hidden ">
          <Image
            className=" object-cover object-center  group-hover:scale-125   duration-300 "
            src="https://source.unsplash.com/random"
            alt=""
            width={1000}
            height={1000} />
        </div>
        {/* <img
          className="w-full h-48 object-cover object-center"
          src="https://source.unsplash.com/random"
          alt="Card image"
        /> */}
        <div className="">
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Card title</h3>
            <p className="text-gray-700 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            viverra congue velit, eu sodales ligula volutpat et. Vestibulum
            ornare ut lectus vitae dictum.
            </p>
          </div>
          <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
            <a href="#" className="text-gray-600 hover:text-gray-800">
            Learn more
            </a>
            <span className="text-gray-600 font-medium">$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
