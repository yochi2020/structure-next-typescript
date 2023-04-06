import { NextPage } from "next";
import style from "./Button.module.css";

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
      className={`${style.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
