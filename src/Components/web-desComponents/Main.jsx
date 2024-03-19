import imgBuilder from "../../assets/web-design/desktop/image-builder.jpg";
import imageBlogr from "../../assets/web-design/desktop/image-blogr.jpg";
import imageExpress from "../../assets/web-design/desktop/image-express.jpg";
import imageCamp from "../../assets/web-design/desktop/image-camp.jpg";
import imagePhoton from "../../assets/web-design/desktop/image-photon.jpg";
import imageTransfert from "../../assets/web-design/desktop/image-transfer.jpg";

export const Main = () => {
  return (
    <section className="flex flex-col px-6 lg:px-[92px] lg:pl-36 md:px-[48px] py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
            <div className="md:flex-1">
              <img
                src={imageExpress}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none lg:rounded-l-none"
                alt=""
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
              <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
                EXPRESS
              </h1>
              <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
                A multi-carrier shipping website for ecommerce businesses
              </p>
            </div>
          </div>
          <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
            <div className="md:flex-1">
              <img
                src={imageTransfert}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none lg:rounded-l-none"
                alt=""
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
              <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
                TRANSFER
              </h1>
              <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
                Site for low-cost money transfers and sending money within
                seconds
              </p>
            </div>
          </div>
          <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
            <div className="md:flex-1">
              <img
                src={imagePhoton}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none lg:rounded-l-none"
                alt=""
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
              <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
                PHOTON
              </h1>
              <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
            <div className="md:flex-1">
              <img
                src={imgBuilder}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none lg:rounded-l-none"
                alt=""
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
              <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
                BUILDER
              </h1>
              <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
                Connects users with local contractors based on their location
              </p>
            </div>
          </div>
          <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
            <div className="md:flex-1">
              <img
                src={imageBlogr}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none lg:rounded-l-none"
                alt=""
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
              <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
                BLOGR
              </h1>
              <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
                Blogr is a platform for creating an online blog or publication
              </p>
            </div>
          </div>
          <div className="flex flex-col hover-container hover:bg-primary cursor-pointer lg:flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#e7826b3b]">
            <div className="md:flex-1">
              <img
                src={imageCamp}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none lg:rounded-l-none"
                alt=""
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-4 py-7 px-3">
              <h1 className="font-medium text-[20px] tracking-[5px] leading-[26px] text-[#E7816B]">
                CAMP
              </h1>
              <p className="text-base leading-[26px] text-center  text-[#333136] md:px-4">
                Get expert training in coding, data, design, and digital
                marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
