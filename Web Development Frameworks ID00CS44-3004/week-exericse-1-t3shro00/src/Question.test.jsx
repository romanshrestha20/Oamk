import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Question from "./components/Question";

test("Test if the question is rendered", () => {
  render(
    <Question question={"Test question"} options={["option1", "option2"]} />
  );
  const questionText = screen.getByText(/Test question/i);
  expect(questionText).toBeInTheDocument();
});

test("Test if question is rendered with correct amount of children", () => {
  const options = ["option1", "option2", "option3", "option4"];
  render(
    <Question question={"Check correct amount of options"} options={options} />
  );

  options.forEach((option) => {
    const optionElement = screen.getByText(option);
    expect(optionElement).toBeInTheDocument();
  });
});

test("Test with empty array of options", () => {
  const options = [];
  render(
    <Question question={"Question with empty options"} options={options} />
  );

  const questionText = screen.getByText(/Question with empty options/i);
  expect(questionText).toBeInTheDocument();
});
