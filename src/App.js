import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Interest from "./Pages/Interest";
import Awards from "./Pages/Awards";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
