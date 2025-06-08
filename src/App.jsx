import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navabr";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Engineering from "./components/Engineering";
const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-white">
        <Navbar />
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "/engineering" element={<Engineering />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
