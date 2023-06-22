import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksToDisplay, handleStockClick }) {

  const stocks = stocksToDisplay.map((stock) =>
    <Stock
      key={stock.id}
      name={stock.name}
      price={stock.price}
      ticker={stock.ticker}
      handleStockClick={handleStockClick}
    />
  )
  return (
    <div>
      <h2>Stocks</h2>
      {stocks}
    </div>
  );
}

export default StockContainer;
