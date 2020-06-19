import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders nav function component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/employee viewer/i);
  expect(linkElement).toBeInTheDocument();
});
