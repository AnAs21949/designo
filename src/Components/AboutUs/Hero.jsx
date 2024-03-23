import imageAboutHero from "../../assets/about/mobile/image-about-hero.jpg";
import imageWorldClassTalent from "../../assets/about/mobile/image-world-class-talent.jpg";
import bg from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
//Tablet
import bgTablet from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import imageAboutHeroTab from "../../assets/about/tablet/image-about-hero.jpg";
import imageWorldClassTalentTab from "../../assets/about/tablet/image-world-class-talent.jpg";
//desktop
import imageAboutHeroDesk from "../../assets/about/desktop/image-about-hero.jpg";
import imageWorldClassTalentDesk from "../../assets/about/desktop/image-world-class-talent.jpg";

export const Hero = () => {
  return (
    <section className="font-jost flex lg:px-[92px] lg:ml-10  flex-col gap-20 md:px-[48px] ">
      <div className="flex flex-col lg:flex-row-reverse ">
        <img src={imageAboutHero} className="w-full md:hidden " alt="" />
        <img
          src={imageAboutHeroTab}
          className="w-full hidden md:block md:rounded-t-2xl  lg:hidden"
          alt=""
        />
        <img
          src={imageAboutHeroDesk}
          className=" hidden lg:block md:rounded-r-2xl"
          alt=""
        />
        <div className="overflow-hidden bg-[#E7816B] lg:flex relative md:rounded-b-2xl lg:rounded-b-none lg:rounded-l-2xl">
          <img
            src={bg}
            className="absolute -top-[65%] left-[10%] md:hidden"
            alt=""
          />
          <img
            src={bgTablet}
            className="absolute bottom-[38%] right-[25%] lg:bottom-0 lg:right-0 hidden md:block"
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start gap-5 py-20 px-5 lg:pt-36  text-white">
            <h1 className="font-medium text-[32px] leading-[36px] lg:px-[45px]">
              About Us
            </h1>
            <p className="leading-[25px] font-light text-[15px] text-center lg:text-left md:px-[45px] lg:pr-20">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  ">
        <img src={imageWorldClassTalent} className="w-full md:hidden" alt="" />
        <img
          src={imageWorldClassTalentTab}
          className="w-full hidden md:block lg:hidden md:rounded-t-2xl"
          alt=""
        />
        <img
          src={imageWorldClassTalentDesk}
          className="w-full  hidden lg:block rounded-l-2xl"
          alt=""
        />
        <div className="relative   lg:flex">
          <img src={bg} className="absolute w-[292px] top-0 left-0" alt="" />
          <div className="bg-[#ffad9b3a] md:rounded-b-2xl lg:rounded-r-2xl flex flex-col lg:pt-40 gap-5 items-center lg:items-start text-center lg:text-left py-20 px-5">
            <h1 className="font-medium text-primary text-[32px] leading-[36px] px-[50px]">
              World-class talent
            </h1>
            <p className="font-normal text-[15px] leading-[25px] px-[50px]">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="font-normal text-[15px] leading-[25px] px-[50px]">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
