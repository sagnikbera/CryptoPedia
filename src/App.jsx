import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";

const App = () => {
  return (
    <div className="app h-screen bg-gradient-to-b from-indigo-800 to-pink-700">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coint/:coinId" element={<Coin/>}/>
      </Routes>
    </div>
  );
};

export default App;
