
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import StockList from './components/StockList/StockList'

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <SearchBar/>
        <StockList/>
        </QueryClientProvider>
  )
}

export default App
