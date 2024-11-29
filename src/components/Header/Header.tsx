import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppStore } from "../../store/AppStore";
import SearchBar from "../SearchBar/SearchBar";

const Header: React.FC = () => {
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);
  const isDarkMode = useAppStore((state) => state.darkMode);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 1000,
        width: '100%',
        padding: '1rem 0',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: 'primary.main'
              }}
            >
              <img src={isDarkMode ? 'src/assets/images/nasdaq-logo-dark.png' : 'src/assets/images/nasdaq-logo-light.svg'} alt="Nasdaq Logo" width="100"/>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton aria-label="toggle-theme-icon" onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <LightModeIcon aria-label="light-mode-icon"/>
                ) : (
                  <DarkModeIcon aria-label="dark-mode-icon"/>
                )}
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: { xs: '100%', md: 'auto' },
              flex: { md: 1 },
              gap: 2,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <SearchBar />
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <IconButton onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
