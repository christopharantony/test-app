import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    // Arrange
    render(<Async />);

    // Act
    const postElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 10000 }
    );

    // Assert
    expect(postElements).not.toHaveLength(0);
  });
});
