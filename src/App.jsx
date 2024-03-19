import { HomePage } from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WebDesign } from "./Pages/WebDesign";
import { AppDesign } from "./Pages/AppDesign";
import { GraphicDesign } from "./Pages/GraphicDesign";
import { AboutUs } from "./Pages/AboutUs";
import { Location } from "./Pages/Location";
import { ContactUs } from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
