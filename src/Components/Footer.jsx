import logo from "../assets/shared/desktop/logo-light.png";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import bgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="font-jost relative px-10 lg:px-[120px] py-10 pt-60 text-white bg-[#1D1C1E]">
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
              <Link to="/locations">LOCATIONS</Link>
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

      <div className="absolute  overflow-hidden bg-[#E7816B] rounded-md items-center gap-7 text-center lg:text-left w-[80vw] md:w-[90vw] md:left-[5%] lg:w-[80vw] lg:left-[10%]  left-[10vw]  -top-[30%] md:-top-[45%] py-16 px-5 ">
        <img src={bgPattern} className="absolute -top-[40%]" alt="" />
        <img src={bgPattern} className="absolute top-[50%] left-[10%]" alt="" />
        <img
          src={bgPattern}
          className="absolute top-[40%] -left-[89%]"
          alt=""
        />
        <div className=" flex gap-3 lg:px-16 flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-7">
            <h1 className="font-medium lg:max-w-[20rem] text-[32px] leading-[32px] px-7 lg:px-0 md:px-32 md:leading-[40px] md:text-[40px]">
              Let’s talk about your project
            </h1>
            <p className="text-[15px] lg:max-w-96 leading-[25px] md:px-28 lg:px-0">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="text-[15px] rounded-md tracking-[1px] hover:text-white hover:bg-secondary font-medium text-[#333136] p-4 bg-white">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </footer>
  );
};
