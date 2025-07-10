import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logo.png";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  removeUser,
  selectUser,
  setUser,
} from "../../redux/features/user/uers.Slice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = localStorage.getItem("user");

    //if user available then setting up user on user state
    if (existingUser) {
      dispatch(setUser(JSON.parse(existingUser)));
    }
    setLoading(false);
  }, [dispatch]);

  const user = useAppSelector(selectUser);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(removeUser());
    toast.success("User Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="2xl:border-b 2xl:border-gray-400 shadow-lg">
      <div className="flex justify-between items-center p-2 md:p-4 w-full max-w-5xl lg:mx-auto">
        <h1 className="flex gap-2 items-center">
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 p-1 lg:p-2 bg-white shadow-2xl shadow-blue-400 rounded-lg"
            />
          </Link>
          <p className="text-xl lg:text-2xl font-bold gradient-text">
            <span>Roadmap</span>
            <span>App</span>
          </p>
        </h1>
        <div className="hidden md:flex justify-end items-center gap-4 md:gap-8 lg:gap-12 text-lg">
          <ul>
            <li>
              <a
                href="#roadmaps"
                className="text-lg text-gray-300 hover:text-white"
              >
                Roadmaps
              </a>
            </li>
          </ul>
          {loading ? (
            <p>Loading....</p>
          ) : !loading && user?.accessToken ? (
            <button
              onClick={handleLogOut}
              className="px-5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition delay-100"
            >
              Logout
            </button>
          ) : (
            <div className="space-x-2">
              <Link
                to="/login"
                className="px-5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition delay-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:from-[#26314b] hover:to-[#26314b] cursor-pointer transition delay-100"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
        <div className="md:hidden relative text-white">
          {toggleNavbar ? (
            <IoClose onClick={() => setToggleNavbar(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setToggleNavbar(true)} />
          )}

          <div
            className={`
      absolute top-8 right-0 bg-[#26314b] border border-gray-400 drop-shadow-lg text-center rounded-lg shadow-lg z-50 overflow-hidden
      transition-all duration-300 ease-in-out
      transform ${
        toggleNavbar
          ? "translate-x-0 opacity-100 w-40 pointer-events-auto"
          : "translate-x-full opacity-0 w-0 pointer-events-none"
      }
    `}
          >
            <ul className="text-lg space-y-2 p-4">
              <li className="border-b rounded-lg hover:bg-blue-600">
                <a href="#roadmaps" onClick={() => setToggleNavbar(false)}>
                  Roadmaps
                </a>
              </li>
              <li className="border-b rounded-lg">
                <Link
                  to="/login"
                  onClick={() => setToggleNavbar(false)}
                  className="px-4 w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:bg-[#26314b]"
                >
                  Login
                </Link>
              </li>
              <li className="border-b rounded-lg">
                <Link
                  to="/signup"
                  onClick={() => setToggleNavbar(false)}
                  className="px-4 w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg font-medium text-white hover:bg-[#26314b]"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
