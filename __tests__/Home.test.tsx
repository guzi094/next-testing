import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />);
    const linkElement = screen.getByText("DocsCC");
    expect(linkElement).toBeInTheDocument();
  });

  it("should contain the text 'information'", () => {
    render(<Home />);
    const linkElement = screen.getByText(/information/i);
    expect(linkElement).toBeInTheDocument();
  });
});
