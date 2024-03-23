import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import webDesignImg from "../../assets/home/mobile/image-web-design.jpg";
import appDesignImg from "../../assets/home/mobile/image-app-design.jpg";
import graphDesignImg from "../../assets/home/mobile/image-graphic-design.jpg";
import bgPattern from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
// Tablet
import webBg from "../../assets/home/tablet/image-web-design.jpg";
import appBg from "../../assets/home/tablet/image-app-design.jpg";
import graphicBg from "../../assets/home/tablet/image-graphic-design.jpg";
//Desktop
import webBgD from "../../assets/home/desktop/image-web-design-large.jpg";
import appBgD from "../../assets/home/desktop/image-app-design.jpg";
import graphicBgD from "../../assets/home/desktop/image-graphic-design.jpg";
import { Link } from "react-router-dom";

export const Features = () => {
  // const [active, setActive] = useState(false);
  // useEffect(() => {
  //   console.log(active);
  // });
  return (
    <section className=" my-40 lg:px-[92px] pb-32 font-jost ">
      <div className="flex flex-col lg:flex-row px-10 py-5 items-center gap-5">
        {/* web design */}
        <Link to="/web-design">
          <div className="relative cursor-pointer  ">
            <div className="after:absolute  after:right-0 after:bottom-0 after:top-0 after:left-0  after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl after:z-0">
              <img
                src={webDesignImg}
                className=" md:hidden rounded-2xl w-full"
                alt=""
              />
              <img
                src={webBg}
                className=" md:block lg:hidden hidden rounded-2xl w-full"
                alt=""
              />
              <img
                src={webBgD}
                className="hidden lg:block rounded-2xl"
                alt=""
              />
            </div>
            <div className="absolute items-center flex flex-col top-[35%] lg:-top-[0%] lg:left-[0%] left-[18%] md:left-[36%] text-white lg:hover:bg-[#e7826ba4] lg:w-full lg:h-full">
              <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[35vh]">
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

        {/* web design */}
        <div className=" flex flex-col items-center gap-5">
          <Link to="/app-design">
            <div className="relative cursor-pointer">
              <div className="after:absolute  after:h-full after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl after:z-50]">
                <img
                  src={appDesignImg}
                  className="rounded-2xl md:hidden"
                  alt=""
                />
                <img
                  src={appBg}
                  className="hidden md:block lg:hidden rounded-2xl"
                  alt=""
                />
                <img
                  src={appBgD}
                  className="hidden lg:block rounded-2xl"
                  alt=""
                />
              </div>
              <div className="absolute items-center flex flex-col top-[35%] lg:top-[0%] lg:left-[0%] left-[18%] md:left-[36%] text-white lg:hover:bg-[#e7826ba4] lg:w-full lg:h-full">
                <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[15vh]">
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

          <Link to="graphic-design">
            <div className="relative cursor-pointer">
              <div className="after:absolute  after:h-full after:w-full after:top-0 after:left-0 after:bottom-0 after:bg-[#0009] hover:after:bg-[#e7826ba4] after:rounded-2xl after:z-50]">
                <img
                  src={graphDesignImg}
                  className="md:hidden rounded-2xl"
                  alt=""
                />
                <img
                  src={graphicBg}
                  className="hidden md:block lg:hidden rounded-2xl"
                  alt=""
                />
                <img
                  src={graphicBgD}
                  className="hidden lg:block rounded-2xl"
                  alt=""
                />
              </div>
              <div className="absolute items-center flex flex-col top-[35%] lg:top-[0%] lg:left-[0%] left-[10%] md:left-[36%] text-white lg:hover:bg-[#e7826ba4] lg:w-full lg:h-full">
                <p className="font-jost text-[28px] leading-[36px] font-medium tracking-[1.4px] lg:mt-[14vh]">
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
        </div>
      </div>

      {/* second part */}
      <div className="lg:flex-row flex flex-col gap-16 items-center mt-10 justify-center px-10 py-5">
        <div className="lg:flex-col flex flex-col md:items-center md:justify-between md:flex-row  gap-4">
          <div className="relative flex flex-col items-center ">
            <img
              src={bgPattern}
              className="absolute w-[202px] h-[202px]"
              alt=""
            />
            <img src={passionate} className="md:max-w-none" alt="" />
          </div>
          <div className="flex flex-col items-center md:items-start lg:items-center gap-6">
            <p className="font-medium  text-[20px] tracking-[5px] leading-[26px]">
              PASSIONATE
            </p>
            <p className="text-[16px] font-normal leading-[26px] text-center md:text-start lg:text-center px-2">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>

        <div className="lg:flex-col flex flex-col  md:items-center md:justify-between md:flex-row gap-4">
          <div className="relative flex flex-col items-center">
            <img
              src={bgPattern}
              className="absolute w-[202px] h-[202px]"
              alt=""
            />
            <img src={resourceful} className="md:max-w-none" alt="" />
          </div>
          <div className="flex flex-col md:items-start items-center lg:items-center gap-6">
            <p className="font-medium text-[20px] tracking-[5px] leading-[26px]">
              RESOURCEFUL
            </p>
            <p className="text-[16px] font-normal md:text-start leading-[26px] text-center lg:text-center px-2">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>

        <div className="lg:flex-col flex flex-col gap-4 md:items-center md:justify-between md:flex-row">
          <div className="relative flex flex-col items-center">
            <img
              src={bgPattern}
              className="absolute w-[202px] h-[202px]"
              alt=""
            />
            <img src={friendly} className="md:max-w-none" alt="" />
          </div>
          <div className="flex flex-col md:items-start items-center lg:items-center gap-6">
            <p className="font-medium text-[20px] tracking-[5px] leading-[26px]">
              FRIENDLY
            </p>
            <p className="text-[16px] md:text-start font-normal leading-[26px] text-center lg:text-center px-2">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
