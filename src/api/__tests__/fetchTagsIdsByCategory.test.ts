import { vi, describe, it, expect, beforeEach } from "vitest";
import { fetchTagsIdsByCategory } from "../endPointTagsIdsByCategory";

// ✅ Tell TypeScript that fetch is a mocked function
const globalAny = globalThis as unknown as {
  fetch: vi.Mock;
};

describe("fetchTagsIdsByCategory", () => {
  beforeEach(() => {
    globalAny.fetch = vi.fn();
  });

  it("returns parsed JSON when response is ok", async () => {
    const mockData = { React: [1, 2], Node: [3] };

    globalAny.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchTagsIdsByCategory();
    expect(result).toEqual(mockData);
  });

  it("throws an error when response is not ok", async () => {
    globalAny.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    await expect(fetchTagsIdsByCategory()).rejects.toThrow(
      "Failed to fetch tags by category",
    );
  });
});
