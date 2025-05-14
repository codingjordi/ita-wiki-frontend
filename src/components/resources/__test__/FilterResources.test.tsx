import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { FilterResources } from "../FilterResources";
import { resourceTypes } from "../../../data/resourceTypes";

// 👇 Mock explícito del hook que trae los tags
vi.mock("../../../hooks/useTagsByCategory", () => ({
  useTagsByCategory: () => ({
    tagsByCategory: {
      eventos: {
        Eventos: 5,
        Conferencias: 2,
      },
    },
  }),
}));

// 👇 Mock del useParams para definir category
vi.mock("react-router", async () => {
  const actual = await import("react-router");
  return {
    ...actual,
    useParams: () => ({ category: "eventos" }),
  };
});

describe("FilterResources Component", () => {
  let selectedTags: string[];
  let selectedResourceTypes: string[];

  let setSelectedTags: ReturnType<typeof vi.fn>;
  let setSelectedResourceTypes: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    selectedTags = [];
    selectedResourceTypes = [];

    setSelectedTags = vi.fn((tags: string[]) => {
      selectedTags = tags;
    });

    setSelectedResourceTypes = vi.fn((types: string[]) => {
      selectedResourceTypes = types;
    });
  });

  it("should render dynamic category tags and resource types", () => {
    render(
      <MemoryRouter>
        <FilterResources
          resourceTypes={[...resourceTypes]}
          selectedTags={[]}
          setSelectedTags={setSelectedTags}
          selectedResourceTypes={selectedResourceTypes}
          setSelectedResourceTypes={setSelectedResourceTypes}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Eventos")).toBeInTheDocument();
    expect(screen.getByText("Conferencias")).toBeInTheDocument();

    resourceTypes.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  it("should allow selecting a tag", () => {
    render(
      <MemoryRouter>
        <FilterResources
          resourceTypes={[...resourceTypes]}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          selectedResourceTypes={selectedResourceTypes}
          setSelectedResourceTypes={setSelectedResourceTypes}
        />
      </MemoryRouter>,
    );

    const eventosRadio = screen.getByText("Eventos");
    fireEvent.click(eventosRadio);
    expect(setSelectedTags).toHaveBeenCalledWith(["Eventos"]);
  });
});
