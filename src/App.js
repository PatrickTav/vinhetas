import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Ratin from "./pages/VinRatinho/Ratin";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ratin" element={<Ratin />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/linkedin"
            component={() => {
              window.location.href = "https://www.linkedin.com/in/patricktavares20/";
            }}
          />
          return null
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
