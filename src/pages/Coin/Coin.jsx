import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [histData, setHistData] = useState(null);
  const { curr } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-M7f7WG2ETusedmNrackAs65X",
      },
    };
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-M7f7WG2ETusedmNrackAs65X",
      },
    };
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${curr.name}&days=10&interval=daily`,
        options
      );
      const data = await res.json();
      setHistData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistData();
  }, [curr]);

  if (!coinData || !histData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Coin Header */}
      <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <img
            src={coinData.image.large}
            alt={coinData.name}
            className="w-16 h-16 object-contain"
          />
          <p className="text-2xl font-bold text-gray-800">
            {coinData.name}{" "}
            <span className="uppercase text-gray-500">({coinData.symbol})</span>
          </p>
        </div>
        <p className="text-lg font-semibold text-gray-800">
          Crypto Market Rank:{" "}
          <span className="text-2xl font-bold">
            #{coinData.market_cap_rank}
          </span>
        </p>
      </div>

      {/* Chart  */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Price History (Last 10 Days)
        </h2>
        <div className="w-full h-[400px]">
          <LineChart histData={histData} />
        </div>
      </div>

      {/* Coin Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center min-w-[240px]">
          <p className="text-gray-500 text-sm">Current Price</p>
          <p className="flex items-baseline gap-1 text-2xl font-bold text-gray-800 whitespace-nowrap">
            {curr.symbol}
            {coinData.market_data.current_price[curr.name].toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center min-w-[240px]">
          <p className="text-gray-500 text-sm">Market Cap</p>
          <p className="flex items-baseline gap-1 text-2xl font-bold text-gray-800 whitespace-nowrap">
            {curr.symbol}
            {coinData.market_data.market_cap[curr.name].toLocaleString()}
          </p>
        </div>

        <div className="bg-green-50 shadow-md rounded-xl p-6 flex flex-col items-center min-w-[240px]">
          <p className="flex items-center gap-1 text-green-600 text-sm font-medium">
            24 Hour High <FaLongArrowAltUp />
          </p>
          <p className="flex items-baseline gap-1 text-2xl font-bold text-green-700 whitespace-nowrap">
            {curr.symbol}
            {coinData.market_data.high_24h[curr.name].toLocaleString()}
          </p>
        </div>

        <div className="bg-red-50 shadow-md rounded-xl p-6 flex flex-col items-center min-w-[240px]">
          <p className="flex items-center gap-1 text-red-600 text-sm font-medium">
            24 Hour Low <FaLongArrowAltDown />
          </p>
          <p className="flex items-baseline gap-1 text-2xl font-bold text-red-700 whitespace-nowrap">
            {curr.symbol}
            {coinData.market_data.low_24h[curr.name].toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
