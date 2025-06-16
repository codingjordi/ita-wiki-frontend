<<<<<<< linibeth/style-wrapper-component
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { FilterResources } from "../FilterResources";
import React from "react";

const mockUseParams = vi.fn();

const mockTags = [
  { id: 5, name: "Eventos", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 2, name: "Conferencias", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
];
=======
import { render, screen } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";
import { FilterResources } from "../FilterResources";

const mockUseParams = vi.fn();

vi.mock("react-router", () => ({
  useParams: () => mockUseParams(),
}));
>>>>>>> main

const mockProps = {
  resourceTypes: ["Video", "Blog", "Cursos"] as const,
  selectedTags: [],
  setSelectedTags: vi.fn(),
  selectedResourceTypes: ["Video", "Blog", "Cursos"],
  setSelectedResourceTypes: vi.fn(),
};

describe("FilterResources Component", () => {
  test("should render Temas section", () => {
    mockUseParams.mockReturnValue({ category: "React" });

    render(<FilterResources {...mockProps} />);

    expect(screen.getByText("Temas")).toBeInTheDocument();
    expect(screen.getByText("Todos")).toBeInTheDocument();
  });

  test("should show no available themes message", () => {
    mockUseParams.mockReturnValue({ category: "UnknownCategory" });

    render(<FilterResources {...mockProps} />);

    expect(screen.getByText("Temas")).toBeInTheDocument();
    expect(screen.getByText("No hay temas disponibles.")).toBeInTheDocument();
  });
});
