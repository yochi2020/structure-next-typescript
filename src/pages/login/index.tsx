import { NextPage } from "next";
import style from "./login.module.css";
import { Button, TextInput } from "@/components/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiRoute from "@/common/apiRoute";
import { axiosInstance } from "@/utils/axios";

const schema = yup.object({
  email: yup.string().email("Email is a required field").required(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required(),
});

interface Props {}

interface FormValue {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Login: NextPage<Props> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValue> = async (data: FormValue) => {
    const response = await axiosInstance.post(apiRoute.auth.login, {
      email: data.email,
      password: data.password,
    });
    // eslint-disable-next-line no-console
    console.log(
      "🚀 ~ file: page.tsx:42 ~ constonSubmit:SubmitHandler<FormValue>= ~ response:",
      response
    );
  };
  return (
    <>
      <div className={style.container}>
        <form className={style.sign_up} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={style.h1}>Sign up</h1>
          <TextInput
            label="Email"
            placeholder="Email"
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Password"
            register={{ ...register("password") }}
            errorMessage={errors.password?.message}
          />
          <Button type="submit" text="submit" />
        </form>
      </div>
    </>
  );
};
export default Login;
