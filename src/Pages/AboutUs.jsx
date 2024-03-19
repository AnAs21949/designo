import { Cities } from "../Components/AboutUs/Cities";
import { Deal } from "../Components/AboutUs/Deal";
import { Hero } from "../Components/AboutUs/Hero";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cities />
      <Deal />
      <Footer />
    </div>
  );
};
