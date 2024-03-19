import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import graphDesignImg from "../../assets/home/mobile/image-graphic-design.jpg";
import webDesignImg from "../../assets/home/mobile/image-web-design.jpg";
import { Link } from "react-router-dom";
// Tablet
import webTab from "../../assets/home/tablet/image-app-design.jpg";
import graphicTab from "../../assets/home/tablet/image-graphic-design.jpg";
// Desktop
import webDes from "../../assets/home/desktop/image-app-design.jpg";
import graphicDes from "../../assets/home/desktop/image-graphic-design.jpg";

export const OtherFeatures = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:px-[135px] lg:justify-center items-center gap-5 mt-10 mb-72">
      <Link to="/web-design">
        <div className="relative">
          <div className="after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl after:z-50]">
            <img src={webDesignImg} className="rounded-2xl md:hidden" alt="" />
            <img
              src={webTab}
              className="rounded-2xl hidden md:block lg:hidden"
              alt=""
            />
            <img src={webDes} className="rounded-2xl hidden lg:block" alt="" />
          </div>
          <div className="absolute items-center flex flex-col top-[35%] lg:top-[0%] lg:left-[0%] left-[18%] md:left-[36%] text-white lg:hover:bg-[#e7826ba4] lg:w-full lg:h-full">
            <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[20vh]">
              WEB DESIGN
            </p>
            <div className="flex mt-2 items-center gap-4">
              <p className="text-[15px] tracking-[5px] font-medium">
                VIEW PROJECTS
              </p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </Link>

      <Link to="/graphic-design">
        <div className="relative">
          <div className="after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl 0">
            <img
              src={graphDesignImg}
              className="rounded-2xl md:hidden"
              alt=""
            />
            <img
              src={graphicTab}
              className="rounded-2xl hidden md:block lg:hidden"
              alt=""
            />
            <img
              src={graphicDes}
              className="rounded-2xl hidden lg:block"
              alt=""
            />
          </div>
          <div className="absolute top-[35%] left-[10%] md:left-[33%] lg:left-[0%] lg:top-0 items-center flex flex-col text-white hover:bg-[#e7826ba4] lg:h-full w-full">
            <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[20vh] ">
              GRAPHIC DESIGN
            </p>
            <div className="flex mt-2 items-center gap-4">
              <p className="text-[15px] tracking-[5px] font-medium">
                VIEW PROJECTS
              </p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};
