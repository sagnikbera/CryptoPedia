import React, { useContext, useState } from "react";
import logo from "../../assets/logo-w.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurr } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const currHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurr({ name: "usd", symbol: "$" });
        break;
      case "inr":
        setCurr({ name: "inr", symbol: "₹" });
        break;
      case "eur":
        setCurr({ name: "eur", symbol: "€" });
        break;
      default:
        setCurr({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-yellow-200 bg-[#09005c] text-gray-200 relative">
      <Link to={"/"}>
        <img src={logo} alt="CryptoPedia Logo" className="w-44 sm:w-52" />
      </Link>

      <ul className="hidden md:flex gap-8 font-bold text-lg">
        <Link to={"/"}>
          <li className="cursor-pointer hover:text-yellow-400 transition">
            Home
          </li>
        </Link>
        <li className="cursor-pointer hover:text-yellow-400 transition">
          Features
        </li>
        <li className="cursor-pointer hover:text-yellow-400 transition">
          Pricing
        </li>
        <li className="cursor-pointer hover:text-yellow-400 transition">
          Blog
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <select
          onChange={currHandler}
          className="px-3 py-1 rounded-md border-2 border-white bg-transparent text-white focus:outline-none hover:bg-[#0c006e] hover:border-yellow-200 transition"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <a
          href="https://www.linkedin.com/in/sagnik-bera/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full font-bold text-gray-800 bg-white hover:bg-yellow-300 transition"
        >
          <span className="text-gray-800 font-bold">Contact</span>{" "}
          <img src={arrow} alt="arrow" className="w-4 h-4" />
        </a>
      </div>

      {!menuOpen && (
        <div
          className="md:hidden text-3xl cursor-pointer text-white z-50"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      )}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#0f0a41] flex flex-col items-center gap-6 pt-20 transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-white"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col gap-6 text-xl font-semibold text-white mt-12">
          <Link to={"/"}>
            <li onClick={() => setMenuOpen(false)}>Home</li>
          </Link>
          <li onClick={() => setMenuOpen(false)}>Features</li>
          <li onClick={() => setMenuOpen(false)}>Pricing</li>
          <li onClick={() => setMenuOpen(false)}>Blog</li>
        </ul>

        <select
          onChange={currHandler}
          className="px-3 py-2 rounded-md border-2 border-white bg-transparent text-white focus:outline-none hover:bg-[#0c006e] hover:border-yellow-200 transition"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <a
          href="https://www.linkedin.com/in/sagnik-bera/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full font-bold text-gray-800 bg-white hover:bg-yellow-300 transition"
        >
          <span className="text-gray-800 font-bold">Contact</span>{" "}
          <img src={arrow} alt="arrow" className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
