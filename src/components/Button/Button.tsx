import { NextPage } from "next";

interface Props {
  text: string;
  type: "button" | "submit";
  className?: string;
  onClick?: () => void;
}
const Button: NextPage<Props> = (props) => {
  const { text, type, className, onClick } = props;

  return (
    <button
      type={type}
      className={`bg-[#ff4D41] text-white py-2 px-4 rounded inline-block mt-10 font-medium border border-[#ff4D41] hover:bg-transparent hover:text-[#ff4D41] transition duration-200 ${className} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
