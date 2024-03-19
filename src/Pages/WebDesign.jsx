import { NavBar } from "../Components/NavBar";
import { Hero } from "../Components/web-desComponents/Hero";
import { Footer } from "../Components/Footer";
import { Main } from "../Components/web-desComponents/Main";
import { OtherServices } from "../Components/web-desComponents/OtherServices";

export const WebDesign = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Main />
      <OtherServices />
      <Footer />
    </div>
  );
};
