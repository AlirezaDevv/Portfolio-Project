import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


import NavBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Themes from "./components/Themes";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Themes/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
