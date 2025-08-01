import React from "react";
import logo from '../../assets/logo-w.png'
import arrow from '../../assets/arrow_icon.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <ul className="text-xl font-bold">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-r font-bold">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button className="font-bold">Sign Up <img src={arrow} alt="" /></button>
        </div>
    </div>
  );
};

export default Navbar;
