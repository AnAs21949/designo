import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import appDesignImg from "../../assets/home/mobile/image-app-design.jpg";
import webDesignImg from "../../assets/home/mobile/image-web-design.jpg";
import { Link } from "react-router-dom";
//Tablet
import webTab from "../../assets/home/tablet/image-web-design.jpg";
import appTab from "../../assets/home/tablet/image-app-design.jpg";
//desktop
import webDes from "../../assets/home/desktop/image-web-design-small.jpg";
import appDes from "../../assets/home/desktop/image-app-design.jpg";

export const OtherFeatures = () => {
  return (
    <section className=" flex flex-col lg:flex-row lg:justify-center lg:px-[135px] items-center gap-5 mt-10 mb-72">
      <Link to="/web-design">
        <div className="relative">
          <div className="after:absolute  after:h-full after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl after:z-50]">
            <img src={webDesignImg} className="rounded-2xl md:hidden" alt="" />
            <img
              src={webTab}
              className="rounded-2xl hidden md:block lg:hidden"
              alt=""
            />
            <img src={webDes} className="rounded-2xl hidden lg:block" alt="" />
          </div>
          <div className="absolute items-center flex flex-col top-[35%] left-[18%] md:left-[34%] lg:top-0 lg:left-0 text-white lg:hover:bg-[#e7826ba4] lg:w-full lg:h-full">
            <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[13vh]">
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

      <Link to="/app-design">
        <div className="relative">
          <div className="after:absolute  after:h-full after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl after:z-50]">
            <img src={appDesignImg} className="rounded-2xl md:hidden" alt="" />
            <img
              src={appTab}
              className="rounded-2xl md:block hidden lg:hidden"
              alt=""
            />
            <img src={appDes} className="rounded-2xl lg:block hidden" alt="" />
          </div>
          <div className="absolute top-[35%] left-[6%] md:left-[0%] lg:top-0 lg:left-0 items-center flex flex-col text-white lg:hover:bg-[#e7826ba4] lg:h-full w-full">
            <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[13vh]">
              APP DESIGN
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
