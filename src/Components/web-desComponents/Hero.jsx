import bg from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import bgTab from "../../assets/web-design/desktop/bg-pattern-intro-web.svg";
export const Hero = () => {
  return (
    <section className="bg-[#E7816B] lg:mx-[92px] lg:ml-36 md:rounded-2xl md:mx-[48px] relative overflow-hidden py-24 md:py-12 px-5 text-white flex flex-col items-center gap-5">
      <img src={bg} className="absolute top-0 right-0 md:hidden" alt="" />
      <img
        src={bgTab}
        className="absolute top-0 right-0 md:block hidden"
        alt=""
      />
      <h1 className="text-[32px] md:text-[48px] font-medium leading-[36px]">
        Web Design
      </h1>
      <p className="text-[15px] leading-[25px] text-center md:px-36 lg:max-w-[42rem]">
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </p>
    </section>
  );
};
