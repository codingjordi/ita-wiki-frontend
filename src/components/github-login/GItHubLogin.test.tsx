import { render, screen } from "@testing-library/react";
import GItHubLogin from "./GItHubLogin";
import { vi } from "vitest";

describe("Renderizado inicial", () => {
  it("debe renderizar el botón con el texto correcto", () => {
    render(<GItHubLogin />);
    const texto = screen.getByText(/Sign in with GItHub/i);

    expect(texto).toBeInTheDocument();
  });

  it("debe llamar a la función onClick cuando se hace clic en el botón", () => {
    const onClickMock = vi.fn();
    render(<GItHubLogin onClick={onClickMock} />);

    const boton = screen.getByText(/Sign in with GItHub/i);
    boton.click();

    expect(onClickMock).toHaveBeenCalled();
  });
});
