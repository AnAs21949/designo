import AIRFILTER from "../../assets/app-design/desktop/image-airfilter.jpg";
import imageEyecam from "../../assets/app-design/desktop/image-eyecam.jpg";
import imageFaceit from "../../assets/app-design/desktop/image-faceit.jpg";
import imageTodo from "../../assets/app-design/desktop/image-todo.jpg";
import imageLoopStudios from "../../assets/app-design/desktop/image-loopstudios.jpg";
import { useState } from "react";
import "./main.css";

export const Main = () => {
  return (
    <section className="flex flex-col lg:mx-[92px] gap-8 px-12 md:px-[48px] py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex cursor-pointer hover-container flex-col md:flex-row md:items-center md:justify-between lg:flex-col rounded-2xl bg-[#e7826b3b]  hover:bg-primary">
          <div className="md:flex-1">
            <img
              src={AIRFILTER}
              className="rounded-t-2xl md:rounded-l-[20px] md:rounded-t-none lg:rounded-t-2xl lg:rounded-b-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1  flex-col items-center gap-4 py-7 px-3">
            <h1
              className={`font-medium  text-[20px] tracking-[5px] leading-[26px] 
                 text-[#E7816B]
              `}
            >
              AIRFILTER
            </h1>
            <p
              className={`text-base leading-[26px] text-center text-[#333136] md:px-4`}
            >
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>

        <div className="flex cursor-pointer hover-container flex-col lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b] hover:bg-primary">
          <div className="md:flex-1">
            <img
              src={imageEyecam}
              className="rounded-t-2xl md:rounded-l-[20px] md:rounded-t-none lg:rounded-t-2xl lg:rounded-b-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              EYECAM
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>

        <div className="flex flex-col cursor-pointer hover-container lg:flex-col  md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b] hover:bg-primary">
          <div className="md:flex-1">
            <img
              src={imageFaceit}
              className="rounded-t-2xl md:rounded-l-[20px] md:rounded-t-none lg:rounded-t-2xl lg:rounded-b-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              FACEIT
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:grid lg:grid-flow-col lg:grid-cols-3">
        <div className="flex flex-col cursor-pointer hover-container lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b] hover:bg-primary">
          <div className="md:flex-1">
            <img
              src={imageTodo}
              className="rounded-t-2xl md:rounded-l-[20px] md:rounded-t-none lg:rounded-t-2xl lg:rounded-b-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              TODO
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>
        <div className="flex flex-col cursor-pointer hover-container md:flex-row lg:flex-col md:items-center md:justify-between rounded-2xl bg-[#e7826b3b] hover:bg-primary">
          <div className="md:flex-1">
            <img
              src={imageLoopStudios}
              className="rounded-t-2xl md:rounded-l-[20px] md:rounded-t-none lg:rounded-t-2xl lg:rounded-b-none"
              alt=""
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
            <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
              LOOPSTUDIOS
            </h1>
            <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
              A VR experience app made for Loopstudios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
