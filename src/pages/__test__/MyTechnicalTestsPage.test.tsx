import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MyTechnicalTestsPage from "../MyTechnicalTestsPage";
import { vi } from "vitest";
import { MemoryRouter } from "react-router";

describe("MyTechnicalTestsPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <MyTechnicalTestsPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByText("Cargando pruebas técnicas..."),
    ).toBeInTheDocument();
  });

  it("handles empty data", async () => {
    const emptyMockData = { data: [] };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(emptyMockData),
      }),
    ) as unknown as typeof fetch;

    render(
      <MemoryRouter>
        <MyTechnicalTestsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByText("- Test A")).not.toBeInTheDocument();
    });
  });
});
