import { Outlet } from "react-router";
import Footer from "../components/shared/Footer.js";
import Navbar from "../components/shared/Navbar.js";

const GeneralLayout = () => {
  return (
    <div className="poppins-regular">
      <Navbar></Navbar>
      <div className="bg-[#F1F5F9] min-h-screen">
        <div className="p-2 md:p-4 w-full max-w-5xl lg:mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GeneralLayout;
