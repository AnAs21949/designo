import bg from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import bgTab from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";

export const Hero = () => {
  return (
    <section className="bg-[#E7816B] lg:mx-[92px] lg:ml-36 md:mx-[48px] md:rounded-2xl  relative overflow-hidden py-24 md:py-12 px-5 text-white flex flex-col items-center gap-5">
      <img src={bg} className="absolute md:hidden top-0 right-0" alt="" />
      <img
        src={bgTab}
        className="absolute md:block hidden top-0 right-0"
        alt=""
      />
      <h1 className="text-[32px] md:text-[48px] font-medium leading-[36px]">
        App Design
      </h1>
      <p className="text-[15px] leading-[25px] text-center md:px-36 lg:max-w-[42rem]">
        Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips.
      </p>
    </section>
  );
};
