import "./hero.css";
import bg from "../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import bgTablet from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import error from "../../assets/contact/desktop/icon-error.svg";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Hero = () => {
  const form = useRef();
  const [active, setActive] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_nlbcq6g",
        "template_kojgf3w",
        form.current,
        "x6I1X1zpvUGyHtx92"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      message: "",
    },
    onSubmit: (values) => {
      setActive(true);
      formik.resetForm();
      sendEmail(); // Call the sendEmail function to actually send the email
    },

    validationSchema: Yup.object({
      user_name: Yup.string().required("First Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      user_phone: Yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Phone number is required"),
      message: Yup.string()
        .min(20, "Too short, minimum 20 letters")
        .required("Comment is required"),
    }),
  });

  const handleOnClose = () => setActive(false);

  return (
    <section className="bg-primary lg:flex-row lg:gap-40 lg:mx-[92px] relative overflow-hidden md:rounded-2xl px-[48px] lg:px-[80px] md:mx-[48px] font-jost text-white flex flex-col items-center gap-7 py-20 ">
      <img
        src={bg}
        className="absolute top-20 -left-20 max-w-none md:hidden"
        alt="Background"
      />
      <img
        src={bgTablet}
        className="hidden md:block absolute -left-[12%] -top-[20%]"
        alt=""
      />
      <div className="flex flex-col lg:self-start lg:pt-16 z-20 gap-4 items-center md:items-start">
        <h1 className="font-medium text-[32px] lg:text-[48px] leading-[36px] ">
          Contact Us
        </h1>
        <p className="text-[15px] leading-[25px] text-center md:text-left lg:max-w-[80vw]">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that are relatable to your
          users, drop us a line.
        </p>
      </div>

      <form
        className="flex flex-col z-20 items-center gap-5 w-full"
        ref={form}
        onSubmit={formik.handleSubmit}
      >
        <div className="relative w-full">
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.user_name}
            onBlur={formik.handleBlur}
            className={`w-full focus-within:bg-transparent placeholder:text-[#ffffff8a] px-3 py-2 border-b outline-none bg-transparent text-[15px] font-medium leading-[26px] ${
              formik.errors.user_name && formik.touched.user_name
                ? "border-red-600"
                : "border-white"
            }`}
          />
          {formik.errors.user_name && formik.touched.user_name && (
            <div className="absolute right-0 top-2 flex items-center gap-3">
              <p className="text-[12px] leading-[26px] text-red-700">
                {formik.errors.user_name}
              </p>
              <img src={error} alt="Error Icon" />
            </div>
          )}
        </div>

        <div className="relative w-full">
          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.user_email}
            onBlur={formik.handleBlur}
            className={`w-full focus-within:bg-transparent placeholder:text-[#ffffff8a] px-3 py-2 border-b outline-none bg-transparent text-[15px] font-medium leading-[26px] ${
              formik.errors.user_email && formik.touched.user_email
                ? "border-red-600"
                : "border-white"
            }`}
          />
          {formik.errors.user_email && formik.touched.user_email && (
            <div className="absolute right-0 top-2 flex items-center gap-3">
              <p className="text-[12px] leading-[26px] text-red-700">
                {formik.errors.user_email}
              </p>
              <img src={error} alt="Error Icon" />
            </div>
          )}
        </div>

        <div className="relative w-full">
          <input
            id="user_phone"
            name="user_phone"
            type="tel"
            placeholder="Phone"
            onChange={formik.handleChange}
            value={formik.values.user_phone}
            onBlur={formik.handleBlur}
            className={`w-full focus-within:bg-transparent placeholder:text-[#ffffff8a] px-3 py-2 border-b outline-none bg-transparent text-[15px] font-medium leading-[26px] ${
              formik.errors.user_phone && formik.touched.user_phone
                ? "border-red-600"
                : "border-white"
            }`}
          />
          {formik.errors.user_phone && formik.touched.user_phone && (
            <div className="absolute right-0 top-2 flex items-center gap-3">
              <p className="text-[12px] leading-[26px] text-red-700">
                {formik.errors.user_phone}
              </p>
              <img src={error} alt="Error Icon" />
            </div>
          )}
        </div>

        <div className="relative w-full">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            className={`w-full focus-within:bg-transparent placeholder:text-[#ffffff8a] pb-6 px-3 border-b outline-none bg-transparent text-[15px] font-medium leading-[26px] ${
              formik.errors.message && formik.touched.message
                ? "border-red-600"
                : "border-white"
            }`}
          />
          {formik.errors.message && formik.touched.message && (
            <div className="absolute right-0 top-2 flex items-center gap-3">
              <p className="text-[12px] leading-[26px] text-red-700">
                {formik.errors.message}
              </p>
              <img src={error} alt="Error Icon" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="hover:bg-secondary hover:text-white bg-white mt-4 rounded-lg py-4 px-10 font-medium text-black text-[15px] md:self-end"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};
