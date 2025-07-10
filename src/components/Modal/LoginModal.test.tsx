import { render, screen, fireEvent } from "@testing-library/react";
import LoginModal from "./LoginModal";
import { describe, test, vi, expect } from "vitest";

describe("LoginModal Component", () => {
  test("does not render when visible is false", () => {
    render(<LoginModal visible={false} onClose={vi.fn()} />);
    expect(
      screen.queryByText(
        "Para acceder a esta sección necesitas iniciar sesión",
      ),
    ).not.toBeInTheDocument();
  });

  test("renders when visible is true", () => {
    render(<LoginModal visible={true} onClose={vi.fn()} />);
    expect(
      screen.getByText("Para acceder a esta sección necesitas iniciar sesión"),
    ).toBeInTheDocument();
  });

  test("calls onClose when clicking on overlay", () => {
    const handleClose = vi.fn();
    render(<LoginModal visible={true} onClose={handleClose} />);

    const overlay = screen.getByText(
      "Para acceder a esta sección necesitas iniciar sesión",
    ).parentElement?.parentElement;

    if (overlay) {
      fireEvent.click(overlay);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  test("calls onClose when clicking close button (X)", () => {
    const handleClose = vi.fn();
    render(<LoginModal visible={true} onClose={handleClose} />);

    const closeButton = screen.getByRole("button", { name: /cerrar modal/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when clicking 'De acuerdo' button", () => {
    const handleClose = vi.fn();
    render(<LoginModal visible={true} onClose={handleClose} />);

    const okButton = screen.getByRole("button", { name: "De acuerdo" });
    fireEvent.click(okButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when clicking inside modal content", () => {
    const handleClose = vi.fn();
    render(<LoginModal visible={true} onClose={handleClose} />);

    const content = screen.getByText(
      "Para acceder a esta sección necesitas iniciar sesión",
    ).parentElement;

    if (content) {
      fireEvent.click(content);
      expect(handleClose).not.toHaveBeenCalled();
    }
  });
});
