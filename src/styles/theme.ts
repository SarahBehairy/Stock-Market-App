import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#90caf9",
    },
    info: {
      main: "#4caf50",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#11111",
      secondary: "#666"    
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#4caf50",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "#999",
    },
  },
});