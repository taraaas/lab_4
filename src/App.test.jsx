import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders get started text", () => {
  render(<App />);
  expect(screen.getByText(/hello123/i)).toBeInTheDocument();
});