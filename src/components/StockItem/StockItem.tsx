import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { StockSearchItemModel } from "../../models/StockSearchItem";

interface StockItemProps {
  stock: StockSearchItemModel,
  onClick?: () => void; // Optional click handler for navigation or other actions
}

const StockItem: React.FC<StockItemProps> = ({ stock, onClick }) => {
  return (
    <Card
      sx={{
        margin: "10px 0",
        cursor: onClick ? "pointer" : "default",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        alignSelf: 'stretch',
        flex:1,
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        },
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}

      onClick={onClick}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: (theme) => theme.palette.primary.main }}>
          {stock.ticker}
        </Typography>
        <Typography sx={{ fontSize: "0.9rem",  color: (theme) => theme.palette.text.primary, marginBottom: "8px" }}>
          {stock.name}
        </Typography>
        <Typography sx={{ fontSize: "0.85rem", color: (theme) => theme.palette.text.secondary }}>
          Market: {stock.market || "N/A"}
        </Typography>
        <Typography sx={{ fontSize: "0.85rem",  color: (theme) => theme.palette.text.secondary }}>
          Type: {stock.type || "N/A"}
        </Typography>
        <Typography sx={{ fontSize: "0.85rem",  color: (theme) => theme.palette.text.secondary }}>
          Currency: {stock.currency_name || "N/A"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StockItem;