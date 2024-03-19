import boxedWater from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import imageChange from "../../assets/graphic-design/desktop/image-change.jpg";
import imageScience from "../../assets/graphic-design/desktop/image-science.jpg";
import "./main.css";

export const Main = () => {
  return (
    <section className="flex flex-col px-12 lg:mx-[92px] md:px-[48px] py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col lg:flex-col hover-container hover:bg-primary cursor-pointer md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
          <div className="md:flex-1">
            <img
              src={boxedWater}
              className="rounded-t-2xl md:rounded-l-[20px] md:rounded-t-none lg:rounded-t-2xl lg:rounded-b-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              TIM BROWN
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              A book cover designed for Tim Brown’s new release, ‘Change’
            </p>
          </div>
        </div>

        <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
          <div className="md:flex-1">
            <img
              src={imageChange}
              className="rounded-t-2xl lg:rounded-t-2xl lg:rounded-b-none md:rounded-l-[20px] md:rounded-t-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              BOXED WATER
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              A simple packaging concept made for Boxed Water
            </p>
          </div>
        </div>

        <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
          <div className="md:flex-1">
            <img
              src={imageScience}
              className="rounded-t-2xl lg:rounded-t-2xl lg:rounded-b-none md:rounded-l-[20px] md:rounded-t-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              SCIENCE!
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              A poster made in collaboration with the Federal Art Project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
