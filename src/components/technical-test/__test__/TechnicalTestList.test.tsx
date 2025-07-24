import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";
import React from "react";
import TechnicalTestList from "../TechnicalTestList";
import { TechnicalTest } from "../../../types/TechnicalTest";

it("fetches and displays technical test titles from mock data", async () => {
  const mockData = [
    {
      id: 1,
      title: "Test A",
      language: "JavaScript",
      description: "Test description A",
      tags: ["tag1"],
    },
    {
      id: 2,
      title: "Test B",
      language: "TypeScript",
      description: "Test description B",
      tags: ["tag2"],
    },
  ];

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }),
  ) as unknown as typeof fetch;

  render(
    <MemoryRouter>
      <TechnicalTestList
        technicalTests={mockData as unknown as TechnicalTest[]}
      />
    </MemoryRouter>,
  );

  await waitFor(() => {
    expect(screen.getByText("Test A")).toBeInTheDocument();
    expect(screen.getByText("Test B")).toBeInTheDocument();
  });
});

it("The title 'Pruebas técnicas' must be displayed", () => {
  render(
    <MemoryRouter>
      <TechnicalTestList technicalTests={[]} />
    </MemoryRouter>,
  );
  expect(screen.getByText("Pruebas técnicas")).toBeInTheDocument();
});
