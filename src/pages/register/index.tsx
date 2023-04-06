import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./register.module.css";
import { Button, TextInput } from "@/components/index";

const schema = yup.object({
  username: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email("Email is a required field").required(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must be match")
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
const Register: NextPage<Props> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <div className={style.container}>
      <form className={style.sign_up} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={style.h1}>Sign up</h1>
        <TextInput
          label="Username"
          placeholder="username"
          register={{ ...register("username") }}
          errorMessage={errors.username?.message}
        />
        <TextInput
          label="Phone"
          placeholder="Phone"
          register={{ ...register("phone") }}
          errorMessage={errors.phone?.message}
        />
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
        <TextInput
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          register={{ ...register("confirmPassword") }}
          errorMessage={errors.confirmPassword?.message}
        />
        <Button type="submit" text="submit" />
      </form>
    </div>
  );
};

export default Register;
