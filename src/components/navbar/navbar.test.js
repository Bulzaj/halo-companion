import { useScrollTrigger } from "@mui/material";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

jest.mock("@mui/material/useScrollTrigger");

describe("Navbar component", () => {
  test("should render", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("banner");
    expect(navbar).toBeInTheDocument();
  });
  test("should render logotype", () => {
    render(<Navbar />);
    const logo = screen.getByRole("img");
    const text = screen.getByText("Halo Companion");
    expect(logo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
  test("should render search bar", () => {
    render(<Navbar />);
    const search = screen.getByRole("textbox");
    expect(search).toBeInTheDocument();
  });
  test("should be transparent with no elevation", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("MuiPaper-elevation0");
    expect(header).toHaveClass("MuiAppBar-colorTransparent");
  });
  test("should change color to primary with elevation when scroll triggered", () => {
    useScrollTrigger.mockResolvedValue(true);
    render(<Navbar />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("MuiPaper-elevation4");
    expect(header).toHaveClass("MuiAppBar-colorPrimary");
  });
});
