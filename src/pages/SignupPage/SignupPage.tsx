/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SignupPage = () => {
  const handleSignup = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <form
          onSubmit={handleSignup}
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
              name="name"
              id="name"
              placeholder="Your Name"
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-1 font-medium">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pb-1 font-medium">
              Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="border border-gray-700 rounded-sm py-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="pb-1 font-medium">
              Image :
            </label>
            <input
              type="url"
              name="image"
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
              name="gender"
              id="gender"
              className="border border-gray-700 rounded-sm py-2 px-4"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
          </div>
          <input
            type="submit"
            value="Login"
            className="px-5 py-2 w-full rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition duration-200 active:scale-95 ease-in-out"
          />
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
