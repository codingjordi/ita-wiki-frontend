import { describe, it, expect, vi } from "vitest";
import { getResources } from "./endPointResources";

describe("getResources", () => {
  it("debería lanzar un error si fetch falla", async () => {
    // Mock de fetch que simula un error de red o de la API
    global.fetch = vi.fn(() =>
      Promise.reject(new Error("Error al obtener los recursos")),
    );

    // Verificar que getResources lanza el error esperado
    await expect(getResources()).rejects.toThrow(
      "Error al obtener los recursos",
    );
  });
  it("debería devolver una lista de recursos", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      } as Response),
    );

    const resources = await getResources();
    expect(resources).toBeInstanceOf(Array);
  });

  it("debería devolver los datos de la API cuando la respuesta es exitosa", async () => {
    // Datos simulados que devolverá la API
    const mockData = [
      { id: 1, name: "Recurso 1" },
      { id: 2, name: "Recurso 2" },
    ];

    // Mock de fetch para que devuelva estos datos
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response),
    );

    const resources = await getResources();

    expect(resources).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("resources/lists"),
    );
  });

  it("debería devolver los datos mockeados cuando la API responde con un error", async () => {
    // Importar los datos mockeados del módulo
    const { default: moock } = await import("../moock/resources.json");
    const moockResources = moock.resources.map((resource) => ({
      ...resource,
      create_at: "2025-02-25 00:00:00",
      update_at: "2025-02-25 00:00:00",
    }));

    // Mock de fetch para simular un error (API responde con status 500)
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response),
    );

    const resources = await getResources();

    expect(resources).toEqual(moockResources);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
