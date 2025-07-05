/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useForm, type SubmitHandler } from "react-hook-form";
// import { useNavigate } from "react-router";
import { useLoginUserMutation } from "../../redux/api/baseApi";
import toast from "react-hot-toast";

type TLogin = {
  email: string;
  password: string;
};

const LoginPage = () => {
  //   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>();

  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const handleLogin: SubmitHandler<TLogin> = async (data: TLogin) => {
    const email = data.email;
    const password = data.password;

    const userData = {
      email,
      password,
    };

    const user = await loginUser(userData).unwrap();

    console.log(user);

    if (user.success) {
      toast.success("User logged in successfully!");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="my-8 md:my-12 lg:my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/3b9b78db-2ba0-42c1-9f57-7f051341a9a3/rlwb759O7d.lottie"
          loop
          autoplay
          className="h-64 w-64 md:h-96 md:w-96"
        />
      </div>
      <div className="px-4 md:px-0">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="w-full md:max-w-md rounded-sm space-y-4 px-4 md:px-6 bg-white py-6 md:py-8"
        >
          <h2 className="text-xl lg:text-2xl text-center font-bold gradient-text space-x-2">
            <span>Roadmap</span>
            <span>Login</span>
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-1 font-medium">
              Email :
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              id="email"
              placeholder="Your Email"
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
            {(errors.email?.type === "required" && (
              <p className="text-red-600 text-sm">Email is required</p>
            )) ||
              (errors.email?.type === "pattern" && (
                <p className="text-red-600 text-sm">
                  Please provide a valid email address.
                </p>
              ))}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pb-1 font-medium">
              Password :
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              id="password"
              placeholder="Your Password"
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
            {(errors.password?.type === "required" && (
              <p className="text-red-600 text-sm">Password is required</p>
            )) ||
              (errors.password?.type === "minLength" && (
                <p className="text-red-600 text-sm">
                  Password can't be less then 6 character.
                </p>
              )) ||
              (errors.password?.type === "maxLength" && (
                <p className="text-red-600 text-sm">
                  Password can't be more then 20 character.
                </p>
              ))}
          </div>
          {isError && (
            <p className="text-red-600 text-sm">
              {(error as any)?.data?.message || "Something went wrong."}
            </p>
          )}

          {isSuccess && (
            <p className="text-green-600 text-sm">
              User Logged in Successfully!
            </p>
          )}
          {isLoading ? (
            <button className="px-5 py-2 w-full rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition duration-200 active:scale-95 ease-in-out">
              Logging user...
            </button>
          ) : (
            <input
              type="submit"
              value="Login"
              className="px-5 py-2 w-full rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition duration-200 active:scale-95 ease-in-out"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
