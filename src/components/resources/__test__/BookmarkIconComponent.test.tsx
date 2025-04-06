import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookmarkIconComponent from "../BookmarkIconComponent";

describe("BookmarkIconComponent class", () => {
  it("The component must have the initial styles", () => {
    render(<BookmarkIconComponent marked={false} />);
    const bookmarkIcon = screen.getByTestId("bookmarkIcon");
    expect(bookmarkIcon).toHaveClass("items-center");
  });
});

describe("BookmarkIconComponent", () => {
  it("renders filled bookmark icon when marked is true", () => {
    render(<BookmarkIconComponent marked={true} />);
    const bookmarkIcon = screen.getByLabelText(
      "Guardado en la lista de lectura",
    );
    expect(bookmarkIcon).toBeInTheDocument();

    // Check for the SVG element itself
    const svgElement = bookmarkIcon.closest("svg");
    expect(svgElement).toBeInTheDocument();

    // Check if there's a path with fill="black"
    const svgPaths = svgElement.querySelectorAll("path");
    expect(svgPaths.length).toBeGreaterThan(0);

    // Check for stroke color - Lucide uses stroke instead of color
    expect(svgElement).toHaveAttribute("stroke", "black");
  });

  it("renders empty bookmark icon when marked is false", () => {
    render(<BookmarkIconComponent marked={false} />);
    const bookmarkIcon = screen.getByLabelText(
      "No guardado en la lista de lectura",
    );
    expect(bookmarkIcon).toBeInTheDocument();

    // Check for the SVG element itself
    const svgElement = bookmarkIcon.closest("svg");
    expect(svgElement).toBeInTheDocument();

    // Check for stroke color - Lucide uses stroke instead of color
    expect(svgElement).toHaveAttribute("stroke", "gray");
  });

  it("renders a div with correct class names", () => {
    render(<BookmarkIconComponent marked={true} />);
    const bookmarkContainer = screen.getByTestId("bookmarkIcon");
    expect(bookmarkContainer).toHaveClass(
      "flex items-center justify-start gap-2 max-h-12",
    );
  });

  it("renders bookmark with correct size", () => {
    render(<BookmarkIconComponent marked={true} />);
    const bookmarkIcon = screen.getByLabelText(
      "Guardado en la lista de lectura",
    );

    // Check for the SVG element itself
    const svgElement = bookmarkIcon.closest("svg");
    expect(svgElement).toBeInTheDocument();

    // Lucide icons typically render with width and height attributes
    expect(svgElement).toHaveAttribute("width", "16");
    expect(svgElement).toHaveAttribute("height", "16");
  });
});
