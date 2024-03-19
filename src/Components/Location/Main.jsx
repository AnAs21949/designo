import imageMapCanada from "../../assets/locations/tablet/image-map-canada.png";
import imageMapAustralia from "../../assets/locations/tablet/image-map-australia.png";
import imageMapUk from "../../assets/locations/tablet/image-map-uk.png";
import bg from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
// desktop
import imageMapCanadaDesk from "../../assets/locations/desktop/image-map-canada.png";
import imageMapAustraliaDesk from "../../assets/locations/desktop/image-map-australia.png";
import imageMapUkDesk from "../../assets/locations/desktop/image-map-united-kingdom.png";

export const Main = () => {
  return (
    <section className="font-jost flex flex-col lg:px-[92px] gap-9 mb-96 md:px-[48px]">
      {/* Canada Section */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse  ">
        <div className="">
          <img
            src={imageMapCanada}
            className="w-full rounded-2xl lg:hidden"
            alt=""
          />
          <img
            src={imageMapCanadaDesk}
            className="w-[40vw] rounded-2xl hidden lg:block"
            alt=""
          />
        </div>
        <div className="bg-[#ffad9b3a] lg:ml-[3rem] lg:w-full relative py-14 md:rounded-2xl">
          <img src={bg} className="absolute top-0" alt="" />
          <div className="flex flex-col md:flex-row items-center md:items-start md:pl-16 gap-7 md:gap-32">
            <div className="flex flex-col gap-5 items-center md:items-start">
              <h1 className="font-medium text-[32px] leading-[36px] text-primary">
                Canada
              </h1>
              <ul className="flex flex-col items-center md:items-start">
                <li className="font-bold text-[16px] leading-[26px]">
                  Designo Central Office
                </li>
                <li className="text-[15px] leading-[25px]">
                  3886 Wellington Street
                </li>
                <li className="text-[15px] leading-[25px]">
                  Toronto, Ontario M9C 3J5
                </li>
              </ul>
            </div>
            <ul className="flex flex-col items-center md:items-start md:self-end">
              <li className="font-bold text-[16px] leading-[26px]">Contact</li>
              <li className="text-[15px] leading-[26px]">P: +1 253-863-8967</li>
              <li className="text-[15px] leading-[26px]">
                M: contact@designo.co
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Australia Section */}
      <div className="flex flex-col gap-5 lg:flex-row md:gap-5 ">
        <div className="lg:ml-[3rem]">
          <img
            src={imageMapAustralia}
            className="w-full rounded-2xl lg:hidden"
            alt=""
          />
          <img
            src={imageMapAustraliaDesk}
            className="w-[40vw] rounded-2xl hidden lg:block"
            alt=""
          />
        </div>
        <div className="bg-[#ffad9b3a]  lg:w-full relative py-14 md:rounded-2xl">
          <img src={bg} className="absolute top-0" alt="" />
          <div className="flex flex-col md:flex-row items-center md:items-start md:pl-16 gap-7 md:gap-32">
            <div className="flex flex-col gap-5 items-center md:items-start">
              <h1 className="font-medium text-[32px] leading-[36px] text-primary">
                Australia
              </h1>
              <ul className="flex flex-col items-center md:items-start">
                <li className="font-bold text-[16px] leading-[26px]">
                  Designo AU Office
                </li>
                <li className="text-[15px] leading-[25px]">
                  19 Balonne Street
                </li>
                <li className="text-[15px] leading-[25px]">
                  New South Wales 2443
                </li>
              </ul>
            </div>
            <ul className="flex flex-col items-center md:items-start md:self-end">
              <li className="font-bold text-[16px] leading-[26px]">Contact</li>
              <li className="text-[15px] leading-[26px]">P: (02) 6720 9092</li>
              <li className="text-[15px] leading-[26px]">
                M: contact@designo.au
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* UK Section */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse md:gap-5 ">
        <div className="">
          <img
            src={imageMapUk}
            className="w-full rounded-2xl lg:hidden"
            alt=""
          />
          <img
            src={imageMapUkDesk}
            className="w-[40vw] rounded-2xl hidden lg:block"
            alt=""
          />
        </div>
        <div className="bg-[#ffad9b3a] lg:ml-[3rem] lg:w-full relative py-14 md:rounded-2xl">
          <img src={bg} className="absolute top-0" alt="" />
          <div className="flex flex-col md:flex-row items-center md:items-start md:pl-16 gap-7 md:gap-32">
            <div className="flex flex-col gap-5 items-center md:items-start">
              <h1 className="font-medium text-[32px] leading-[36px] text-primary">
                United Kingdom
              </h1>
              <ul className="flex flex-col items-center md:items-start">
                <li className="font-bold text-[16px] leading-[26px]">
                  Designo UK Office
                </li>
                <li className="text-[15px] leading-[25px]">13 Colorado Way</li>
                <li className="text-[15px] leading-[25px]">
                  Rhyd-y-fro SA8 9GA
                </li>
              </ul>
            </div>
            <ul className="flex flex-col items-center md:items-start md:self-end">
              <li className="font-bold text-[16px] leading-[26px]">Contact</li>
              <li className="text-[15px] leading-[26px]">P: 078 3115 1400</li>
              <li className="text-[15px] leading-[26px]">
                M: contact@designo.uk
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
