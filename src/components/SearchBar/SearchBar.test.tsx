import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { useAppStore } from "../../store/AppStore";

jest.mock("../../store/AppStore");
const mockSetSearch = jest.fn();

describe("SearchBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAppStore as unknown as jest.Mock).mockImplementation((selector) => {
      return selector({ setSearch: mockSetSearch });
    });
  });

  it("renders search input field", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("search")).toBeInTheDocument();
  });

  it("updates input value when user types", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("search");
    await userEvent.type(input, "AAPL");
    expect(input).toHaveValue("AAPL");
  });

  it("clears input when clear button is clicked", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("search");
    
    await userEvent.type(input, "AAPL");
    expect(input).toHaveValue("AAPL");
    
    const clearButton = screen.getByLabelText('clear-search-btn');
    await userEvent.click(clearButton);
    
    expect(input).toHaveValue("");
    expect(mockSetSearch).toHaveBeenCalledWith("");
  });

  it("debounces search input", async () => {
    jest.useFakeTimers();
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("search");

    fireEvent.change(input, { target: { value: "AAPL" } });

    expect(mockSetSearch).not.toHaveBeenCalledWith("AAPL");

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(mockSetSearch).toHaveBeenCalledWith("AAPL");

    jest.useRealTimers();
  });
});
