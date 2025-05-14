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
  let selectedTheme: string;
  let selectedResourceTypes: string[];

  let setSelectedTheme: ReturnType<typeof vi.fn>;
  let setSelectedResourceTypes: ReturnType<typeof vi.fn>;
  let resetTheme: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    selectedTheme = "Todos";
    selectedResourceTypes = [];

    setSelectedTheme = vi.fn((theme: string) => {
      selectedTheme = theme;
    });

    setSelectedResourceTypes = vi.fn((types: string[]) => {
      selectedResourceTypes = types;
    });

    resetTheme = vi.fn(() => {
      selectedTheme = "Todos";
      selectedResourceTypes = [];
    });
  });

  it("should render dynamic category tags and resource types", () => {
    render(
      <MemoryRouter>
        <FilterResources
          themes={[]} // no se usa ya
          resourceTypes={[...resourceTypes]}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          selectedResourceTypes={selectedResourceTypes}
          setSelectedResourceTypes={setSelectedResourceTypes}
          resetTheme={resetTheme}
        />
      </MemoryRouter>,
    );

    // Verificamos que se muestren los tags del mock
    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Eventos")).toBeInTheDocument();
    expect(screen.getByText("Conferencias")).toBeInTheDocument();

    // Verificamos que se muestren los tipos de recurso
    resourceTypes.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  it("should allow selecting a tag", () => {
    render(
      <MemoryRouter>
        <FilterResources
          themes={[]} // ya no se usa
          resourceTypes={[...resourceTypes]}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          selectedResourceTypes={selectedResourceTypes}
          setSelectedResourceTypes={setSelectedResourceTypes}
          resetTheme={resetTheme}
        />
      </MemoryRouter>,
    );

    const eventosRadio = screen.getByText("Eventos");
    fireEvent.click(eventosRadio);
    expect(setSelectedTheme).toHaveBeenCalledWith("Eventos");
  });
});
