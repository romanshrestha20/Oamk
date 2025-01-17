import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Option from "./components/Option";

test("Test if the option is rendered", () => {
  render(<Option option={"Test option"} />);
  const optionText = screen.getByText(/Test option/i);
  expect(optionText).toBeInTheDocument();
});
