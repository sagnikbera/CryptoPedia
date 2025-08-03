import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [curr, setCurr] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-M7f7WG2ETusedmNrackAs65X",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAllCoin(res))
      .catch((err) => console.error(err));
  };

  // fetch during loading
  useEffect(() => {
    fetchAllCoin();   
  } , [curr])

  const contextValue = {
    allCoin,
    curr,
    setCurr
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
