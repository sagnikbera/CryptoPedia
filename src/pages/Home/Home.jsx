import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, curr } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value); 
    if(e.target.value == '') {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async(e) => {
    e.preventDefault();
   const coin =  await allCoin.filter((item) => {
      const searchedCoin = item.name.toLowerCase().includes(input.toLowerCase());     
      return searchedCoin;
    })
    setDisplayCoin(coin);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="px-3 sm:px-6 pb-24">
      <div className="max-w-3xl mx-auto mt-20 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-fuchsia-100">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="font-medium text-base sm:text-xl text-fuchsia-300 leading-relaxed">
          Welcome to the world's largest cryptocurrency marketplace. <br /> Sign
          up to explore more about...
        </p>
        {/* form  */}
        <form 
        onSubmit={searchHandler}
        className="flex items-center gap-2 w-full sm:w-4/5 bg-white rounded-lg px-3 py-2 shadow-md">
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="search crypto..."
            className="flex-1 text-gray-700 text-sm sm:text-base outline-none border-none px-2"
            required
            list="coinlist"
          />
          <datalist id="coinlist">
            {allCoin.map((item, index) => {
              return <option value={item.name} key={index}></option>
            })}
          </datalist>
          <button
            className="bg-indigo-700 hover:bg-indigo-900 hover:text-amber-100 font-bold text-sm sm:text-base px-4 py-2 rounded-lg text-white transition"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-12 rounded-xl overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-800 to-pink-700 shadow-lg">
        <div className="grid grid-cols-[0.3fr_2fr_1fr] md:grid-cols-[0.3fr_2fr_1fr_1fr_1.5fr] px-4 sm:px-6 py-3 border-b border-gray-600 text-white font-bold text-sm sm:text-base">
          <p>#</p>
          <p>Coins</p>
          <p className="text-center">Price</p>
          <p className="hidden md:block text-center">24H Change</p>
          <p className="hidden md:block text-right">Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item, index) => (
          <Link
            to={`/coin/${item.id}`}
            key={index}
            className="grid grid-cols-[0.3fr_2fr_1fr] md:grid-cols-[0.3fr_2fr_1fr_1fr_1.5fr] px-4 sm:px-6 py-3 border-b border-gray-700 text-gray-200 items-center text-sm sm:text-base"
          >
            <p className="text-amber-200">{item.market_cap_rank}</p>

            <p className="flex items-center gap-1 sm:gap-2 text-amber-400">
              <img src={item.image} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>
                {item.name}-
                <span className="font-bold uppercase">{item.symbol}</span>
              </span>
            </p>

            <p className="text-center text-amber-300">
              {curr.symbol} {item.current_price.toLocaleString()}
            </p>

            <p
              className={`hidden md:flex justify-center font-bold ${
                item.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>

            <p className="hidden md:flex justify-end text-amber-100">
              {curr.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
