import imageRealDeal from "../../assets/about/mobile/image-real-deal.jpg";
import bg from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
//Tablet
import imageRealDealTab from "../../assets/about/tablet/image-real-deal.jpg";
//Desktop
import imageRealDealDesk from "../../assets/about/desktop/image-real-deal.jpg";

export const Deal = () => {
  return (
    <section className="font-jost flex flex-col lg:flex-row-reverse mb-96 mt-20 md:px-[48px] lg:px-[92px]">
      <img src={imageRealDeal} className="w-full md:hidden" alt="" />
      <img
        src={imageRealDealTab}
        className="w-full hidden md:block lg:hidden rounded-t-2xl"
        alt=""
      />
      <img
        src={imageRealDealDesk}
        className="w-full hidden lg:block rounded-r-2xl "
        alt=""
      />
      <div className="relative flex ">
        <img src={bg} className="absolute w-[292px] top-0 left-0" alt="" />
        <div className="bg-[#ffad9b3a] lg:pt-44 flex flex-col gap-5 items-center lg:items-start text-center lg:text-left py-20 px-5 md:rounded-b-2xl lg:rounded-b-none lg:rounded-l-2xl">
          <h1 className="font-medium text-primary text-[32px] leading-[36px] lg:md:px-[50px]">
            The real deal
          </h1>
          <p className="font-normal text-[15px] leading-[25px] md:px-[50px]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="font-normal text-[15px] leading-[25px] md:px-[50px]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </section>
  );
};
