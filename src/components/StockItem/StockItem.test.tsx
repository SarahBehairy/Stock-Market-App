import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StockItem from "./StockItem";

describe("StockItem Component", () => {
  const mockStock = {
    ticker: "AAPL",
    name: "Apple Inc.",
    market: "NASDAQ",
    locale: "us",
    type: "Common Stock",
    active: true,
    currency_name: "USD",
    cik: "0000320193",
    last_updated_utc:"2024-08-21T00:00:00Z"
  };

  it("renders stock information correctly", () => {
    render(<StockItem stock={mockStock} />);

    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("Apple Inc.")).toBeInTheDocument();
    expect(screen.getByText("Market: NASDAQ")).toBeInTheDocument();
    expect(screen.getByText("Type: Common Stock")).toBeInTheDocument();
    expect(screen.getByText("Currency: USD")).toBeInTheDocument();
  });

  it("handles missing optional fields gracefully", () => {
    const incompleteStock =   {
        ticker: "AAPL",
        name: "Apple Inc.",
        market: "NASDAQ",
        locale: "us",
        active: true,
        currency_name: "USD",
        cik: "0000320193",
        last_updated_utc:"2024-08-21T00:00:00Z"
      };

    render(<StockItem stock={incompleteStock} />);

    expect(screen.getByText("Type: N/A")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<StockItem stock={mockStock} onClick={handleClick} />);

    const card = screen.getByText("AAPL").closest(".MuiCard-root");
    expect(card).toBeInTheDocument();

    if (card) {
      await userEvent.click(card);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });

  it("has correct styling when onClick is provided", () => {
    const handleClick = jest.fn();
    render(<StockItem stock={mockStock} onClick={handleClick} />);

    const card = screen.getByText("AAPL").closest(".MuiCard-root");
    expect(card).toHaveStyle({ cursor: "pointer" });
  });

  it("has correct styling when onClick is not provided", () => {
    render(<StockItem stock={mockStock} />);

    const card = screen.getByText("AAPL").closest(".MuiCard-root");
    expect(card).toHaveStyle({ cursor: "default" });
  });
});
