import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import StockList from "../components/StockList/StockList";
import { useAppStore } from "../store/AppStore";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Homepage: React.FC = () => {
    const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  return (
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#f5f8fa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1000,
            width: '100%', 
            padding: '20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <SearchBar />
          <IconButton 
            onClick={() => toggleDarkMode()}
            sx={{
              position: 'absolute',
              right: '24px'
            }}
          >
            {useAppStore.getState().darkMode ? (
                 <LightModeIcon />
            ) : (
                <DarkModeIcon />
            )}
          </IconButton>
        </Box>

        <Box sx={{ width: "100%", marginTop: "130px" }}>
            <StockList />
        </Box>
      </Container>
  );
};

export default Homepage;


