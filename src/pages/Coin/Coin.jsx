import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  //?  <Route path="/coint/:coinId" element={<Coin/>}/>
  //*  must be same coinId in router to this const coinId.
  const { coinId } = useParams();

  const [coinData, setCoinData] = useState();
  const [histData, setHistData] = useState();

  const { curr } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-M7f7WG2ETusedmNrackAs65X",
      },
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-M7f7WG2ETusedmNrackAs65X",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${curr.name}&days=10`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistData();
  }, [curr]);

  if ((coinData, histData)) {
    return (
      <>
        <div className="coin">
          <div className="coin-name">
            <img src={coinData.image.large} alt="" />
            <p>
              <b>
                {coinData.name} - {coinData.symbol.toUpperCase()}
              </b>
            </p>
          </div>

          <div className="coin-chart">
            <LineChart histData={histData} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
