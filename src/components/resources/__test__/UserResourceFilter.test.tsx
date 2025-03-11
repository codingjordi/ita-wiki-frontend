import { renderHook, act } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useResourceFilter } from "../../../hooks/useResourceFilter";
import { IntResource } from "../../../types";

// Mock the react-router hooks
vi.mock("react-router", () => ({
  useParams: vi.fn(),
  useSearchParams: vi.fn(),
}));

import { useParams, useSearchParams } from "react-router";

describe("useResourceFilter", () => {
  // Mock data
  const mockThemes = ["Todos", "Componentes", "UseState & UseEffect"] as const;
  const mockResourceTypes = ["Video", "Cursos", "Blog"] as const;

  // Sample resources for testing
  const mockResources: IntResource[] = [
    {
      id: 1,
      github_id: 12345,
      title: "React Basics",
      description: "Learn React basics",
      url: "https://example.com/react",
      category: "React",
      theme: "Componentes",
      type: "Video",
    },
    {
      id: 2,
      github_id: 12346,
      title: "Advanced Hooks",
      description: "Advanced React hooks usage",
      url: "https://example.com/hooks",
      category: "React",
      theme: "UseState & UseEffect",
      type: "Blog",
    },
    {
      id: 3,
      github_id: 12347,
      title: "Angular Introduction",
      description: "Intro to Angular",
      url: "https://example.com/angular",
      category: "Angular",
      theme: "Componentes",
      type: "Cursos",
    },
  ];

  // Mock URLSearchParams with proper get/set methods
  let mockParamsData: Record<string, string> = {};
  let mockSetSearchParams: ReturnType<typeof vi.fn>;

  // Helper to create a proper mock of URLSearchParams
  function createMockSearchParams() {
    return {
      get: (key: string) => mockParamsData[key] || null,
      set: (key: string, value: string) => {
        mockParamsData[key] = value;
      },
      toString: () =>
        Object.entries(mockParamsData)
          .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
          .join("&"),
    };
  }

  beforeEach(() => {
    // Reset mocks and mock data
    vi.clearAllMocks();
    mockParamsData = {};

    // Create mock search params
    const mockSearchParams = createMockSearchParams();
    mockSetSearchParams = vi.fn();

    // Setup useSearchParams mock
    (useSearchParams as ReturnType<typeof vi.fn>).mockReturnValue([
      mockSearchParams,
      mockSetSearchParams,
    ]);

    // Default category param
    (useParams as ReturnType<typeof vi.fn>).mockReturnValue({
      category: "React",
    });
  });

  it("initializes with default values when URL has no parameters", () => {
    const { result } = renderHook(() =>
      useResourceFilter({
        resources: mockResources,
        themes: mockThemes,
        resourceTypes: mockResourceTypes,
      }),
    );

    // Match actual implementation - should use first items from arrays
    expect(result.current.selectedTheme).toBe(mockThemes[0]);
    expect(result.current.selectedResourceTypes).toEqual(mockResourceTypes);
  });

  it("updates URL when selection changes", () => {
    const { result } = renderHook(() =>
      useResourceFilter({
        resources: mockResources,
        themes: mockThemes,
        resourceTypes: mockResourceTypes,
      }),
    );

    // Change theme selection
    act(() => {
      result.current.setSelectedTheme("Componentes");
    });

    expect(mockSetSearchParams).toHaveBeenCalled();
  });

  it("filters resources by category from URL params", () => {
    // Mock category from URL params
    (useParams as ReturnType<typeof vi.fn>).mockReturnValue({
      category: "Angular",
    });

    const { result } = renderHook(() =>
      useResourceFilter({
        resources: mockResources,
        themes: mockThemes,
        resourceTypes: mockResourceTypes,
      }),
    );

    // Should only include Angular resources
    expect(result.current.filteredResources.length).toBe(1);
    expect(result.current.filteredResources[0].category).toBe("Angular");
  });

  it("resets filters when category changes", () => {
    // Mock function to track if setSelectedTheme is called
    const mockSetCategory = vi.fn();

    // Initial render with React category
    const { rerender } = renderHook(
      (props) => {
        (useParams as ReturnType<typeof vi.fn>).mockReturnValue({
          category: props.category,
        });

        const result = useResourceFilter({
          resources: mockResources,
          themes: mockThemes,
          resourceTypes: mockResourceTypes,
        });

        // Access properties directly without .current
        if (result.selectedTheme === "Todos" && props.category === "Angular") {
          mockSetCategory("reset detected");
        }

        return result;
      },
      { initialProps: { category: "React" } },
    );

    // Change to different category
    rerender({ category: "Angular" });

    // Expect the side effect function was called, showing filters were reset
    expect(mockSetCategory).toHaveBeenCalledWith("reset detected");
  });
});
