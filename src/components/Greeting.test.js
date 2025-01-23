import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false }); // exact false is for checking sub-strings and case insensitive
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);

    const goodToSeeYouElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("renders 'YOU ARE SOO AWESOME' if the button was clicked", async () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");

    await userEvent.click(buttonElement);

    const awesomeElement = screen.getByText("YOU ARE SOO AWESOME", {
      exact: false,
    });
    expect(awesomeElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", async () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");

    await userEvent.click(buttonElement);

    const goodToSeeYouElement = screen.queryByText("good to see you", {
      exact: false,
    });

    expect(goodToSeeYouElement).toBeNull();
  });
});
