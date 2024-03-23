import logo from "../assets/shared/desktop/logo-dark.png";
import open from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleOverlay = () => {
    setActive((prev) => !prev);
  };

  return (
    <nav className="w-full lg:px-[92px] h-[96px] flex items-center justify-between md:pr-[48px]">
      <div className=" flex fixed lg:items-start md:static md:w-fit bg-white z-40 w-full  items-center justify-between px-[48px] py-[40px] md:py-0">
        <Link to="/">
          <img src={logo} className="w-[202px]" alt="" />
        </Link>

        <img
          src={open}
          onClick={toggleOverlay}
          alt=""
          className={`md:hidden ${active ? "hidden" : "block"}`}
        />
        <img
          src={close}
          onClick={toggleOverlay}
          className={`md:hidden ${active ? "block" : "hidden"}`}
          alt=""
        />
      </div>
      <div
        className={` z-50 md:hidden fixed top-[96px] h-[100vh] ${
          active ? "bg-[rgba(0,0,0,0.66)] left-[0px] block" : "hidden"
        }  w-full`}
      >
        <ul
          className={` ${
            active
              ? "h-[270px] overflow-visible opacity-100 transition-opacity"
              : "opacity-0 overflow-hidden h-0"
          }  w-full bg-[#1D1C1E] font-jost text-[24px] py-[48px] pl-[48px] tracking-[2px] text-white uppercase flex flex-col gap-5`}
        >
          <li>
            <Link to="/about-us">OUR COMPANY</Link>
          </li>
          <li>
            <Link to="/locations">location</Link>
          </li>
          <li>
            <Link to="/contact-us">contact</Link>
          </li>
        </ul>
      </div>
      <ul
        className={`hidden  md:flex z-40 font-jost text-[24px]  tracking-[2px] text-black uppercase items-center gap-7`}
      >
        <li className="text-black  text-[14px] leading-[14px] tracking-[2px]">
          <Link to="/about-us">OUR COMPANY</Link>
        </li>
        <li className="text-black text-[14px] leading-[14px] tracking-[2px]">
          <Link to="/locations">location</Link>
        </li>
        <li className="text-black text-[14px] leading-[14px] tracking-[2px]">
          <Link to="/contact-us">contact</Link>
        </li>
      </ul>
    </nav>
  );
};
