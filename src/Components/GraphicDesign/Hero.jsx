import bg from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import bgTab from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";

export const Hero = () => {
  return (
    <section className="bg-[#E7816B] lg:mx-[92px] lg:ml-36 md:mx-[48px] md:rounded-2xl relative overflow-hidden py-24 md:py-12 px-5 text-white flex flex-col items-center gap-5">
      <img src={bg} className="absolute top-0 right-0 md:hidden" alt="" />
      <img
        src={bgTab}
        className="absolute top-0 right-0 md:block hidden"
        alt=""
      />
      <h1 className="text-[32px] font-medium leading-[36px]">Graphic Design</h1>
      <p className="text-[15px] leading-[25px] text-center md:px-36 lg:max-w-[42rem]">
        We deliver eye-catching branding materials that are tailored to meet
        your business objectives.
      </p>
    </section>
  );
};
