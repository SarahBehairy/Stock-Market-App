import React from "react";
import StockItem from "../StockItem/StockItem";

const stocks = [
  { ticker: "AAPL", fullName: "Apple Inc." },
  { ticker: "MSFT", fullName: "Microsoft Corporation" },
  { ticker: "TSLA", fullName: "Tesla, Inc." },
];

const StockList: React.FC = () => {
  return (
    <div>
      {stocks.map((stock) => (
        <StockItem
          key={stock.ticker}
          stock={stock}
          onClick={() => console.log(`${stock.ticker} clicked`)}
        />
      ))}
    </div>
  );
};

export default StockList;