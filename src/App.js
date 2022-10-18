import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyHome from "./components/Utils/MyHome";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/homie" element={<MyHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
