import heroImg from "../../assets/home/desktop/image-hero-phone.png";
import bgPattern from "../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";

export const Hero = () => {
  return (
    <section className="md:rounded-lg  lg:mx-[105px]   md:mx-[48px] relative bg-[#E7816B] font-jost overflow-hidden pb-[17rem] lg:pb-0 md:pb-[50%]">
      <img
        src={bgPattern}
        className="absolute top-24 left-0 w-[640px] lg:hidden"
        alt=""
      />
      <div className="lg:flex lg:gap-5">
        <div className="md:px-28 lg:pl-[6%] lg:pt-[11%] lg:self-start lg:gap-6 relative z-30 text-white gap-5 pt-20 pb-10 px-5 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <h1 className="text-[32px] font-medium leading-[36px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[15px] leading-[25px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="hover:text-white hover:bg-secondary uppercase h-[56px] w-[152px] tracking-[1px] text-[15px] font-medium text-black bg-white rounded-[8.1px] ">
            learn more
          </button>
        </div>
        <img
          src={heroImg}
          alt=""
          className="absolute lg:static  lg:h-[40rem] left-0 right-0 -bottom-[30vh] md:-bottom-[40vh] md:left-4 z-10"
        />
      </div>
    </section>
  );
};
