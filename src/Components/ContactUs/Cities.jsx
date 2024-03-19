import bg from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import illustrationAustralia from "../../assets/shared/desktop/illustration-australia.svg";
import illustrationCanada from "../../assets/shared/desktop/illustration-canada.svg";
import illustrationUnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";

export const Cities = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:w-full lg:gap-44 items-center justify-center gap-10 my-24">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="">
          <img src={bg} alt="" className="absolute" />
          <img src={illustrationCanada} alt="" />
        </div>
        <h1 className="font-medium text-[20px] leading-[26px] tracking-[5px]">
          CANADA
        </h1>
        <button className="hover:bg-secondary text-white font-medium text-[15px] tracking-[1px] bg-primary py-4 px-5 rounded-lg">
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="">
          <img src={bg} alt="" className="absolute" />
          <img src={illustrationAustralia} alt="" />
        </div>
        <h1 className="font-medium text-[20px] leading-[26px] tracking-[5px]">
          AUSTRALIA
        </h1>
        <button className="hover:bg-secondary text-white font-medium text-[15px] tracking-[1px] bg-primary py-4 px-5 rounded-lg">
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="">
          <img src={bg} alt="" className="absolute" />
          <img src={illustrationUnitedKingdom} alt="" />
        </div>
        <h1 className="font-medium text-[20px] leading-[26px] tracking-[5px]">
          UNITED KINGDOM
        </h1>
        <button className="hover:bg-secondary text-white font-medium text-[15px] tracking-[1px] bg-primary py-4 px-5 rounded-lg">
          SEE LOCATION
        </button>
      </div>
    </section>
  );
};
