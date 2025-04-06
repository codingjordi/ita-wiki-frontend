import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ListResources } from "../ListResources";
import moock from "../../../moock/resources.json";
import { categories } from "../../../data/categories";
import { IntResource } from "../../../types";
import { describe, it, expect, vi } from "vitest";

// Mock the entire hook
vi.mock("../../../hooks/useResourceFilter", () => ({
  useResourceFilter: () => ({
    filteredResources: moockResources,
    selectedTheme: "Todos",
    setSelectedTheme: vi.fn(),
    selectedResourceTypes: ["Video"],
    setSelectedResourceTypes: vi.fn(),
    resetTheme: vi.fn(),
  }),
}));

vi.mock("../../../hooks/useCtxUser", () => ({
  useCtxUser: () => ({
    user: { id: "123463" },
  }),
}));

// Add mock for useResources
vi.mock("../../../context/ResourcesContext", () => ({
  useResources: () => ({
    isBookmarked: vi.fn(),
    toggleBookmark: vi.fn(),
    resources: moockResources,
    isLoading: false,
  }),
}));

const moockResources = moock.resources.map(
  (resource) =>
    ({
      ...resource,
      created_at: "2025-02-25 00:00:00",
      updated_at: "2025-02-25 00:00:00",
    }) as IntResource,
);

const category = Object.keys(categories)[0] as keyof typeof categories;

describe("ListResources Component", () => {
  it("should render the component and display the correct title", () => {
    render(
      <MemoryRouter>
        <ListResources resources={moockResources} category={category} />
      </MemoryRouter>,
    );

    const titleElement = screen.getByText(`Recursos ${String(category)}`);
    expect(titleElement.tagName).toBe("H2");
  });
});
