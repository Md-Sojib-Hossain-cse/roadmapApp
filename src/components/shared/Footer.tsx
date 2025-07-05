import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import { RiCustomerServiceLine } from "react-icons/ri";
import googleImg from "../../assets/Google.png";
import appleImg from "../../assets/apple.png";
import BkashImg from "../../assets/bkash.png";
import NogodImg from "../../assets/nogod.png";
import VisaImg from "../../assets/visa.png";
import AmericanExpressImg from "../../assets/americanExpress.png";
import MasterCardImg from "../../assets/mastercard.png";
import ContactInfo from "../ContactInfo";
import PaymentButton from "../PaymentButton";

const Footer = () => {
  return (
    <nav className="bg-[#0F172A] text-white">
      <div className="w-full max-w-5xl mx-auto px-4 py-6 lg:py-10">
        <footer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Logo & Contact Info */}
          <aside className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="logo"
                className="h-8 w-8 lg:h-10 lg:w-10 object-contain bg-white rounded-lg"
              />
              <p className="text-xl lg:text-2xl font-bold gradient-text">
                <span>Roadmap</span>
                <span>App</span>
              </p>
            </div>
            <p className="text-[#F1F5F9] text-sm max-w-[272px]">
              Experience our new platform & enjoy exciting deals and offers on
              your day to day.
            </p>
            <div className="space-y-3">
              <ContactInfo title="House #64, Road 13, ASA Center, Uttara, Dhaka-1402">
                <FaLocationDot className="w-4 h-4 text-black" />
              </ContactInfo>
              <ContactInfo title="01906-479901">
                <FaPhone className="w-4 h-4 text-black" />
              </ContactInfo>
              <ContactInfo title="roadmap@gmail.com">
                <FaEnvelope className="w-4 h-4 text-black" />
              </ContactInfo>
            </div>
          </aside>

          {/* About Links */}
          <nav className="space-y-4">
            <h6 className="text-[#94A3B8] text-lg font-semibold uppercase tracking-wide">
              About
            </h6>
            <div className="flex flex-col space-y-2">
              <a className="text-white font-medium hover:underline">
                Contact Us
              </a>
              <a className="text-white font-medium hover:underline">About Us</a>
              <a className="text-white font-medium hover:underline">Careers</a>
              <a className="text-white font-medium hover:underline">Press</a>
              <a className="text-white font-medium hover:underline">
                Cancellation & Returns
              </a>
              <a className="text-white font-medium hover:underline">
                Terms of Use
              </a>
            </div>
          </nav>

          {/* Help Links */}
          <nav className="space-y-4">
            <h6 className="text-[#94A3B8] text-lg font-semibold uppercase tracking-wide">
              Help
            </h6>
            <div className="flex flex-col space-y-2">
              <a className="text-white font-medium hover:underline">
                Contact Us
              </a>
              <a className="text-white font-medium hover:underline">Payments</a>
              <a className="text-white font-medium hover:underline">FAQs</a>
              <a className="text-white font-medium hover:underline">
                Terms of Use
              </a>
              <a className="text-white font-medium hover:underline">Security</a>
              <a className="text-white font-medium hover:underline">Privacy</a>
            </div>
          </nav>

          {/* Help Line & App Download */}
          <nav className="space-y-6">
            <div className="space-y-3">
              <h6 className="text-[#94A3B8] text-lg font-semibold uppercase tracking-wide">
                Help Line
              </h6>
              <p className="flex gap-2 max-w-44 items-center border border-[#F1F5F9] py-2 px-4 rounded-sm">
                <RiCustomerServiceLine className="text-[#00B795] text-lg" />
                <span className="font-medium text-white">10724-7814XX</span>
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="text-[#94A3B8] text-lg font-semibold uppercase tracking-wide">
                Download App
              </h6>
              <div className="space-y-4">
                <img src={googleImg} alt="google" className="max-w-[180px]" />
                <img src={appleImg} alt="apple" className="max-w-[180px]" />
              </div>
            </div>
          </nav>
        </footer>
      </div>

      {/* Social + Payments */}
      <div className="w-full max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Socials */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <h6 className="text-[#E2E8F0] font-medium">Follow us on</h6>
          <div className="flex gap-4">
            <div className="cursor-pointer bg-white h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:bg-blue-100">
              <FaFacebookF className="h-4 w-4 text-black" />
            </div>
            <div className="cursor-pointer bg-white h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:bg-pink-100">
              <FaInstagram className="h-4 w-4 text-black" />
            </div>
            <div className="cursor-pointer bg-white h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:bg-sky-100">
              <FaTwitter className="h-4 w-4 text-black" />
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <h6 className="text-[#94A3B8] text-lg font-medium">
            Payments Accepted
          </h6>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentButton imgUrl={VisaImg} />
            <PaymentButton imgUrl={MasterCardImg} />
            <button className="bg-blue-700 rounded-sm h-10 w-14 flex justify-center items-center">
              <img src={AmericanExpressImg} alt="AmEx" />
            </button>
            <PaymentButton imgUrl={BkashImg} />
            <PaymentButton imgUrl={NogodImg} />
          </div>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="w-full text-center border-t border-white/20 py-4">
        <p className="text-white text-sm">
          RoadmapApp ©2025. Developed by MD Sojib Hossain
        </p>
      </div>
    </nav>
  );
};

export default Footer;
