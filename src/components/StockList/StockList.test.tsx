import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import StockList from './StockList';
import { fetchStocks } from '../../services/stockApi';
import { useAppStore } from '../../store/AppStore';

// Mock the dependencies
jest.mock('../../services/stockApi');
jest.mock('../../store/AppStore');

const mockFetchStocks = fetchStocks as jest.MockedFunction<typeof fetchStocks>;
const mockUseAppStore = useAppStore as jest.MockedFunction<typeof useAppStore>;

const mockStockData = {
  status: 'OK',
  request_id: '1234',
  count: 2,
  results: [
    {
      ticker: "AAPL",
      name: "Apple Inc.",
      market: "NASDAQ",
      locale: "us",
      type: "Common Stock",
      active: true,
      currency_name: "USD",
      cik: "0000320193",
      last_updated_utc:"2024-08-21T00:00:00Z"
    },
    {
      ticker: 'GOOGL',
      name: 'Alphabet Inc.',
      cik: '789012',
      locale: "us",
      type: "Common Stock",
      active: true,
      currency_name: "USD",
      last_updated_utc:"2024-08-21T00:00:00Z",
      market: "NASDAQ",
    }
  ],
  next_url: ''
};

describe('StockList', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    mockUseAppStore.mockImplementation(() => '');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    mockFetchStocks.mockResolvedValueOnce(mockStockData);

    render(
      <QueryClientProvider client={queryClient}>
        <StockList />
      </QueryClientProvider>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders stock items when data is loaded', async () => {
    mockFetchStocks.mockResolvedValueOnce(mockStockData);

    render(
      <QueryClientProvider client={queryClient}>
        <StockList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('stock-item')).toHaveLength(2);
    });
  });

  it('renders empty state when no results', async () => {
    mockFetchStocks.mockResolvedValueOnce({  status: 'OK',
      request_id: '1234',
      count: 0, results: [] });

    render(
      <QueryClientProvider client={queryClient}>
        <StockList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('No stocks found')).toBeInTheDocument();
    });
  });

  it('renders error message when API call fails', async () => {
    const errorMessage = 'Failed to fetch stocks data';
    mockFetchStocks.mockRejectedValueOnce(new Error(errorMessage));

    render(
      <QueryClientProvider client={queryClient}>
        <StockList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it('uses search term from store', async () => {
    const searchTerm = 'AAPL';
    mockUseAppStore.mockImplementation(() => searchTerm);
    mockFetchStocks.mockResolvedValueOnce(mockStockData);

    render(
      <QueryClientProvider client={queryClient}>
        <StockList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(mockFetchStocks).toHaveBeenCalledWith(1, searchTerm);
    });
  });
});
