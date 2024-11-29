import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders empty state message", () => {
    render(<EmptyState />);
    
    expect(screen.getByText("No stocks found")).toBeInTheDocument();
    expect(screen.getByText("Try adjusting your search criteria")).toBeInTheDocument();
  });

  it("has correct styling", () => {
    render(<EmptyState />);
    
    const container = screen.getByText("No stocks found").closest("div");
    expect(container).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "50vh",
      marginTop: "100px"
    });
  });
});
