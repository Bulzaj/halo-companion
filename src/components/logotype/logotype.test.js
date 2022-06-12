import { render, screen } from "@testing-library/react";
import Logotype from "./Logotype";

describe("Logotype component", () => {
  test("should render logo", () => {
    render(<Logotype />);
    const text = screen.getByText("Halo Companion");
    expect(text).toBeInTheDocument();
  });

  test("should render text", () => {
    render(<Logotype />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });
});
