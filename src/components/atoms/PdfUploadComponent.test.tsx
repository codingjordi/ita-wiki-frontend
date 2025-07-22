import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PdfUploadComponent from "./PdfUploadComponent";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";

beforeEach(() => {
  vi.spyOn(window, "alert").mockImplementation(() => {});
});

describe("PdfUploadComponent", () => {
  it("muestra el texto inicial", () => {
    render(<PdfUploadComponent />);
    expect(screen.getByText(/no file selected/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /browse/i })).toBeInTheDocument();
  });

  it("muestra el nombre del archivo PDF tras seleccionarlo", async () => {
    render(<PdfUploadComponent />);

    const file = new File(["contenido"], "documento.pdf", {
      type: "application/pdf",
    });

    const input = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => {
      expect(screen.getByText("documento.pdf")).toBeInTheDocument();
    });
  });

  it("lanza alerta si se selecciona un archivo no-PDF", () => {
    render(<PdfUploadComponent />);

    const file = new File(["no es un PDF"], "imagen.png", {
      type: "image/png",
    });

    const input = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    expect(window.alert).toHaveBeenCalledWith(
      "Por favor selecciona un archivo PDF.",
    );
  });
});
