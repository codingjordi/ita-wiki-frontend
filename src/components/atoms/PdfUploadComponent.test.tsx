import { render, screen, fireEvent } from "@testing-library/react";
import PdfUploadComponent from "./PdfUploadComponent";
import { vi, describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";

beforeEach(() => {
  vi.spyOn(window, "alert").mockImplementation(() => {});
});

describe("PdfUploadComponent (simple)", () => {
  it("muestra el texto inicial", () => {
    render(<PdfUploadComponent />);
    expect(screen.getByText(/no file selected/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /browse/i })).toBeInTheDocument();
  });

  it("muestra el nombre del archivo PDF después de seleccionarlo", async () => {
    render(<PdfUploadComponent />);

    const file = new File(["PDF content"], "documento.pdf", {
      type: "application/pdf",
    });

    const input = screen.getByLabelText("", { selector: 'input[type="file"]' });
    fireEvent.change(input, { target: { files: [file] } });

    expect(await screen.findByText("documento.pdf")).toBeInTheDocument();
  });

  it("lanza una alerta si se selecciona un archivo que no es PDF", () => {
    render(<PdfUploadComponent />);

    const file = new File(["no es un pdf"], "foto.png", { type: "image/png" });

    const input = screen.getByLabelText("", { selector: 'input[type="file"]' });
    fireEvent.change(input, { target: { files: [file] } });

    expect(window.alert).toHaveBeenCalledWith(
      "Por favor selecciona un archivo PDF.",
    );
  });
});
