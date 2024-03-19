import { NavBar } from "../Components/NavBar";
import { Hero } from "../Components/GraphicDesign/Hero";
import { OtherFeatures } from "../Components/GraphicDesign/OtherFeatures";
import { Footer } from "../Components/Footer";
import { Main } from "../Components/GraphicDesign/Main";

export const GraphicDesign = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Main />
      <OtherFeatures />
      <Footer />
    </div>
  );
};
