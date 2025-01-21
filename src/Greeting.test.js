import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false }); // exact false is for checking sub-strings and case insensitive
    expect(helloWorldElement).toBeInTheDocument();
  });
});
