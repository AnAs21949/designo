import { Hero } from "../Components/AppDesignCompo/Hero";
import { Main } from "../Components/AppDesignCompo/Main";
import { OtherFeatures } from "../Components/AppDesignCompo/OtherFeatures";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const AppDesign = () => {
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
