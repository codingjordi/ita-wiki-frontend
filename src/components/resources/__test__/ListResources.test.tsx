import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ListResources } from "../ListResources";
import moock from "../../../moock/resources.json";
import { categories } from "../../../data/categories";
import { IntResource } from "../../../types";
import { describe, it, expect, vi } from "vitest"; // Add this import

vi.mock("../../../hooks/useResourceFilter", () => ({
  useResourceFilter: () => ({
    filteredResources: moockrResources,
    selectedTheme: "Todos",
    setSelectedTheme: vi.fn(),
    selectedResourceTypes: ["Video"],
    setSelectedResourceTypes: vi.fn(),
    resetTheme: vi.fn(),
  }),
}));

const moockrResources = moock.resources.map(
  (resource) =>
    ({
      ...resource,
      create_at: "2025-02-25 00:00:00",
      update_at: "2025-02-25 00:00:00",
    }) as IntResource,
);

const category = Object.keys(categories)[0] as keyof typeof categories;

describe("ListResources Component", () => {
  it("should render the component and display the correct title", () => {
    render(
      <MemoryRouter>
        <ListResources resources={moockrResources} category={category} />
      </MemoryRouter>,
    );

    const titleElement = screen.getByText(`Recursos ${String(category)}`);
    expect(titleElement.tagName).toBe("H2");
  });
});
