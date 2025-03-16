import { render, screen } from "@testing-library/react";
import BookmarkComponent from "./BookmarkComponent";
import { vi } from "vitest";

vi.mock("../../../assets/edit.svg", () => ({
  default: "mocked-edit-icon",
}));

describe("BookmarkComponent", () => {
  const title = "Test Title";
  const description = "Test Description";
  const url = "https://example.com";

  test("renders the title, description, and link correctly", () => {
    render(
      <BookmarkComponent title={title} description={description} url={url} />,
    );
    // Verifica que el título esté presente
    expect(screen.getByText(`Título: ${title}`)).toBeInTheDocument();
    // Verifica que la descripción esté presente
    expect(screen.getByText(`Descripción: ${description}`)).toBeInTheDocument();
    // Verifica que el enlace tenga la URL correcta
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
  });

  test("displays the edit icon", () => {
    render(
      <BookmarkComponent title={title} description={description} url={url} />,
    );

    // Verifica que la imagen de edición esté presente
    const editImage = screen.getByAltText("edit");
    expect(editImage).toBeInTheDocument();
    // Verifica que la imagen tenga el tamaño correcto
    expect(editImage).toHaveClass("w-[15px]");
  });
});
