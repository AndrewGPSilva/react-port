import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Skills from "./views/Skills.jsx";
import Projects from "./views/Projects.jsx";
import Certificates from "./views/Certificates.jsx";
import About from "./views/About.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/certificates" element={<Certificates />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}