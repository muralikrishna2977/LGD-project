import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import ForLandowners from "./pages/ForLandowners";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const wrap = (C: any, name: string) => (
  <Layout currentPageName={name}>
    <C />
  </Layout>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={wrap(Home, "Home")} />
      <Route path="/home" element={wrap(Home, "Home")} />
      <Route path="/about" element={wrap(About, "About")} />
      <Route path="/ventures" element={wrap(Ventures, "Ventures")} />
      <Route path="/for-landowners" element={wrap(ForLandowners, "ForLandowners")} />
      <Route path="/gallery" element={wrap(Gallery, "Gallery")} />
      <Route path="/testimonials" element={wrap(Testimonials, "Testimonials")} />
      <Route path="/contact" element={wrap(Contact, "Contact")} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
