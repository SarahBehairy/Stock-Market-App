import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../components/StockList/StockList", () => {
  return function MockStockList() {
    return <div data-testid="mock-stock-list">Stock List</div>;
  };
});

jest.mock("../../components/Header/Header", () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header</div>;
  };
});

describe("Homepage", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  it("renders header and stock list components", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    );

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-stock-list")).toBeInTheDocument();
  });
});
