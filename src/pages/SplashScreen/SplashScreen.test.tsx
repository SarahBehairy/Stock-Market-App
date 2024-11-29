import { render, screen } from "@testing-library/react";
import SplashScreen from "./SplashScreen";

describe("SplashScreen", () => {
  it("renders logo and name", () => {
    render(<SplashScreen />);

    const logo = screen.getByAltText("Nasdaq Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("width", "300px");

    expect(screen.getByText("Sarah Hanafy")).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    render(<SplashScreen />);
    
    expect(screen.getByLabelText("splash-screen")).toHaveClass("splash-screen");
    expect(screen.getByLabelText("splash-logo")).toHaveClass("splash-logo");
    expect(screen.getByText("Sarah Hanafy")).toHaveClass("splash-name");
  });
});
