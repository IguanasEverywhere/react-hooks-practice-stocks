import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks }) {

  const portStocks = portfolioStocks.map((stock) => <Stock key={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portStocks
      }
    </div>
  );
}

export default PortfolioContainer;
