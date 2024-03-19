import { Hero } from "../Components/HomeCompo/Hero";
import { Features } from "../Components/HomeCompo/Features";
import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};
