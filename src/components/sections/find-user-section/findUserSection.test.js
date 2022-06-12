import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FindUserSection from "./FindUserSection";

describe("Find user section", () => {
  test("should render", () => {
    render(<FindUserSection />);
    const header = screen.getByText("SEARCH FOR HALO INFINITE STATS");
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    expect(header).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should render disabled button", () => {
    render(<FindUserSection />);
    const button = screen.getByRole("button");
    screen.debug();
    expect(button).toHaveAttribute("disabled", "");
  });
  test("should show error text when textfield is empty and lost focus", async () => {
    render(<FindUserSection />);
    const input = screen.getByRole("textbox");
    userEvent.click(input);
    userEvent.click(document.body);
    const errorText = await screen.findByText("Field could not be empty");
    expect(errorText).toBeInTheDocument();
  });
  test("should render available button when input is filled", () => {
    render(<FindUserSection />);
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test value");
    expect(button).not.toHaveAttribute("disabled");
  });
});
