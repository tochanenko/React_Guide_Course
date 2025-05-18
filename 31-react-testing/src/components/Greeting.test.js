import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting Component', () => {

  test('Renders Hello World as a test', () => {
    // Arange
    render(<Greeting />);

    // Act
    // nothing

    // Assert
    const linkElement = screen.getByText('Hello World!', { exact: true });
    expect(linkElement).toBeInTheDocument();
  });

  test('Check if it\'s good to see you if button was not clicked', () => {
    render(<Greeting />);
    const linkElement = screen.getByText('It\'s good to see you!', { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test('Check if text changed on button click', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const linkElement = screen.getByText('Changed!', { exact: true });
    expect(linkElement).toBeInTheDocument();
  });

  test('Check if text gone on button click', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const linkElement = screen.queryByText('good to see you!', { exact: false });
    expect(linkElement).toBeNull();
  });

});