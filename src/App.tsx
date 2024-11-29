import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from './pages/Homepage/Homepage';
import './App.css';
import { useAppStore } from "./store/AppStore";
import { darkTheme } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./styles/theme";
import { useEffect } from "react";
import { useState } from "react";
import SplashScreen from "./pages/SplashScreen/SplashScreen";

const queryClient = new QueryClient();

function App() {
  const darkMode = useAppStore((state) => state.darkMode);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashSeen = sessionStorage.getItem("splashSeen");
    if (splashSeen) {
      setShowSplash(false); // Skip splash screen if already seen
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashSeen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen />
  }
  
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Homepage/>
    </ThemeProvider>
  </QueryClientProvider>
  )
}

export default App
