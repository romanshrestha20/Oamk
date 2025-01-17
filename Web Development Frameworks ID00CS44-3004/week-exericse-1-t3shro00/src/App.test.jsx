import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test if the question is rendered", () => {
  render(<App question={"Test question"} options={["option1", "option2"]} />);
  const questionText = screen.getByText(/Test question/i);
  expect(questionText).toBeInTheDocument();
});

test("Test if the options are rendered with two options", () => {
  const options = ["option1", "option2"];
  render(<App question={"Test question"} options={options} />);

  options.forEach((option) => {
    const optionElement = screen.getByText(option);
    expect(optionElement).toBeInTheDocument();
  });
});

test("Test if the options are rendered with random number of options", () => {
  let randomNumberOfOptions = Math.floor(Math.random() * 100);
  const options = [];
  for (let i = 0; i < randomNumberOfOptions; i++) {
    options.push(`option${i}`);
  }
  render(<App question={"Test question"} options={options} />);
  options.forEach((option) => {
    const optionElement = screen.getByText(option);
    expect(optionElement).toBeInTheDocument();
  });
});
