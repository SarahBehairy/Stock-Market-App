import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from './pages/Homepage';
import './App.css';
import { useAppStore } from "./store/AppStore";
import { darkTheme } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  const darkMode = useAppStore((state) => state.darkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);
  
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
