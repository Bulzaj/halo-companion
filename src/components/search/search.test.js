import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  test("should render form", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("Enter tag...");
    const button = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
