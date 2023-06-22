import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [allStocks, setAllStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(stockData => setAllStocks(stockData));
  }, [])

  function handleStockClick(clickedTicker) {
    const stockToAddToPortfolio = allStocks.find((stock) => stock.ticker === clickedTicker);
    if (!portfolioStocks.find((stock) => stock.ticker === clickedTicker)) {
      setPortfolioStocks([...portfolioStocks, stockToAddToPortfolio]);
    }
  }

  function handlePortfolioStockClick(clickedTicker) {
    const updatedPortfolio = portfolioStocks.filter((stock) => stock.ticker !== clickedTicker);
    setPortfolioStocks(updatedPortfolio);
  }


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToDisplay={allStocks} handleStockClick={handleStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            handlePortfolioStockClick={handlePortfolioStockClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
