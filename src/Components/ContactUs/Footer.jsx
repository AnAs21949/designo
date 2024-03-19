import logo from "../../assets/shared/desktop/logo-light.png";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="font-jost relative px-10 py-10 pt-20 text-white bg-[#1D1C1E]">
      <div className="flex flex-col gap-7 md:gap-12 ">
        <div className="flex flex-col md:flex-row md:justify-between gap-7  ">
          <div className="self-center">
            <Link to="/">
              <img src={logo} className="w-[202px]" alt="" />
            </Link>
          </div>
          <hr className="md:hidden" />
          <ul className="flex flex-col md:flex-row gap-7 text-center leading-[14px]">
            <li className="text-[14px] tracking-[2px]">
              {" "}
              <Link to="/about-us">OUR COMPANY</Link>
            </li>
            <li className="text-[14px] tracking-[2px]">
              {" "}
              <Link to="/locations">LOCATIONS</Link>{" "}
            </li>
            <li className="text-[14px] tracking-[2px]">
              <Link to="/contact-us">CONTACT</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className=" flex flex-col md:flex-row md:justify-between items-center gap-6 ">
          <ul className="flex flex-col  items-center">
            <li className="font-bold text-[16px] leading-[26px]">
              Designo Central Office
            </li>
            <li className="text-xs leading-[26px]">3886 Wellington Street</li>
            <li className="text-xs leading-[26px]">Toronto, Ontario M9C 3J5</li>
          </ul>
          <ul className="flex flex-col items-center">
            <li className="font-bold text-[16px] leading-[26px]">
              Contact Us (Central Office)
            </li>
            <li className="text-xs leading-[26px]">P : +1 253-863-8967</li>
            <li className="text-xs leading-[26px]">M : contact@designo.co</li>
          </ul>
          <div className="flex  gap-3">
            <img src={twitter} className="text-[#E7816B]" alt="" />
            <img src={facebook} className="text-[#E7816B]" alt="" />
            <img src={pinterest} className="text-[#E7816B]" alt="" />
            <img src={instagram} className="text-[#E7816B]" alt="" />
            <img src={youtube} className="text-[#E7816B]" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
