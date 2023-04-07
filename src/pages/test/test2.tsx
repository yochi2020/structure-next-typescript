import { NextPage } from "next";
interface Props {}
const Login: NextPage<Props> = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  h-screen w-full ">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover "
          src={
            "https://www.pcclean.io/wp-content/uploads/2020/4/fABJry.jpg"
          }
          alt="image"
        />
      </div>
      <div className="grid place-items-center bg-gray-800">
        <form className=" p-8 max-w-[400px] rounded-lg w-full mx-auto bg-gray-900">
          <h2 className="font-bold text-4xl py-2 dark:text-white">SIGN IN</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none mt-2 p-2"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none mt-2 p-2"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="bg-teal-500 my-5 py-2 w-full shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
