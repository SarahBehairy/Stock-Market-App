import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface StockItemProps {
  stock: {
    ticker: string;
    fullName: string;
  };
  onClick?: () => void; // Optional click handler for navigation or other actions
}

const StockItem: React.FC<StockItemProps> = ({ stock, onClick }) => {
  return (
    <Card
      style={{ margin: "10px 0", cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
    >
      <CardContent>
        <Typography variant="h6">{stock.ticker}</Typography>
        <Typography color="textSecondary">{stock.fullName}</Typography>
      </CardContent>
    </Card>
  );
};

export default StockItem;