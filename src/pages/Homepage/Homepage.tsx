import React from "react";
import { Box, Container } from "@mui/material";
import StockList from "../../components/StockList/StockList";
import Header from "../../components/Header/Header";

const Homepage: React.FC = () => {
  return (
      <Container aria-label="main" maxWidth="lg" sx={{ position: 'relative' }}>
        <Header/>
        <Box sx={{ width: "100%", marginTop: "8rem" }}>
            <StockList />
        </Box>
      </Container>
  );
};

export default Homepage;


