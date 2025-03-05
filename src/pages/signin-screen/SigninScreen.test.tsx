import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SinginScreen } from "./SigninScreen";
import { BrowserRouter as Router } from "react-router";

describe("SigninScreen", () => {
  beforeEach(() => {
    render(
      <Router>
        <SinginScreen />
      </Router>
    );
  });

  test("should display an error message when email is empty", async () => {
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const errorMessage = await screen.findByText(
      /enter a valid email address/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when password is empty", async () => {
    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const errorMessage = await screen.findByText(/password is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("should not display any error messages when both fields are filled", async () => {
    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(
        screen.queryByText(/enter a valid email address/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/password is required/i)
      ).not.toBeInTheDocument();
    });
  });

  test("should display an error message for invalid email format", async () => {
    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const errorMessage = await screen.findByText(
      /enter a valid email address/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
