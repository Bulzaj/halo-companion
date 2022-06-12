import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("Hero section", () => {
  test("should render", () => {
    render(<HeroSection />);
    const text = screen.getByText("HALO COMPANION");
    const gameStatsBtn = screen.getByText("Game stats");
    expect(text).toBeInTheDocument();
    expect(gameStatsBtn).toBeInTheDocument();
  });
});
