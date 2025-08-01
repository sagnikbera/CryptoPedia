import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <div className="hero">
            <h1
            className="text-7xl font-extrabold text-fuchsia-100">Largest <br /> Crypto Marketplace</h1>
            <p className="font-bold text-xl text-fuchsia-300 mt-4">We1come to the world's largest cryptocurrency marketplace. <br /> Sign up to explore more about...</p>
            <form action="">
                <input type="text" placeholder="search crypto..." />
                <button
                className="bg-indigo-700 hover:bg-indigo-900 hover:text-amber-100 font-bold"
                type="submit">Search</button>
            </form>
        </div>

        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p>24H Change</p>
                <p>Market Cap</p>
            </div>
        </div>
    </div>
  );
};

export default Home;
