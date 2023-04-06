import { NextPage } from "next";
import style from "./TextInput.module.css";
interface Props {
  placeholder: string;
  type?: string;
  label: string;
  register: any;
  errorMessage: any;
}
const TextInput: NextPage<Props> = (props) => {
  const { placeholder, type, label, register, errorMessage } = props;

  return (
    <div className={style.input_group}>
      <label htmlFor="Username">{label}</label>
      <input
        className={style.input}
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register}
      />
      <span className={style.error_message}>{errorMessage}</span>
    </div>
  );
};
export default TextInput;
