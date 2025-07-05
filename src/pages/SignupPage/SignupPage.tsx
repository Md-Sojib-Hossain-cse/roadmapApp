/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

type TSignupForm = {
  name: string;
  email: string;
  password: string;
  image?: string;
  gender: "male" | "female" | "others";
};

const SignupPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupForm>();

  const [createUser, { isError, isLoading, isSuccess, error }] =
    useCreateUserMutation();

  const handleSignup: SubmitHandler<TSignupForm> = async (
    data: TSignupForm
  ) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.image;
    const gender = data.gender;

    const userObj = {
      name,
      email,
      password,
      image,
      gender,
    };

    const user = await createUser(userObj).unwrap();

    if (user.success) {
      toast.success("User Created Successfully!");
      navigate("/login", { replace: true });
    } else {
      toast.error("Something went wrong ,please try again later.");
    }
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="px-4 md:px-0">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="w-full md:max-w-md rounded-sm space-y-4 px-4 md:px-6 bg-white py-6 md:py-8"
        >
          <h2 className="text-xl lg:text-2xl text-center font-bold gradient-text space-x-2">
            <span>Roadmap</span>
            <span>Signup</span>
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-1 font-medium">
              Name :
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              {...register("name", {
                required: true,
                minLength: 3,
                pattern: /^[A-Z]/,
              })}
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
            {(errors.name?.type === "required" && (
              <p className="text-red-600 text-sm">Name is required</p>
            )) ||
              (errors.name?.type === "minLength" && (
                <p className="text-red-600 text-sm">
                  Name Can't be less then 3 character.
                </p>
              )) ||
              (errors.name?.type === "pattern" && (
                <p className="text-red-600 text-sm">
                  Name must start with a capital letter
                </p>
              ))}
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="image" className="pb-1 font-medium">
              Image :
            </label>
            <input
              type="url"
              {...register("image")}
              id="image"
              placeholder="Your Image Url"
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="pb-1 font-medium">
              Gender :
            </label>
            <select
              {...register("gender", { required: true })}
              id="gender"
              className="border border-gray-700 rounded-sm py-2 px-4"
              defaultValue="male"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
            {errors.gender?.type === "required" && (
              <p className="text-red-600 text-sm">Pleas select your gender.</p>
            )}
          </div>

          {isError && (
            <p className="text-red-600 text-sm">
              {(error as any)?.data?.message || "Something went wrong."}
            </p>
          )}

          {isSuccess && (
            <p className="text-green-600 text-sm">User created Successfully!</p>
          )}

          {isLoading ? (
            <button className="px-5 py-2 w-full rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition duration-200 active:scale-95 ease-in-out">
              Creating user...
            </button>
          ) : (
            <input
              type="submit"
              value="Signup"
              className="px-5 py-2 w-full rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition duration-200 active:scale-95 ease-in-out"
            />
          )}
        </form>
      </div>
      <div className="flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/3b9b78db-2ba0-42c1-9f57-7f051341a9a3/rlwb759O7d.lottie"
          loop
          autoplay
          className="h-64 w-64 md:h-96 md:w-96"
        />
      </div>
    </div>
  );
};

export default SignupPage;
