import { formatLinkText } from "../../src/lib/formatLinkText.ts";

describe("formatLinkText", () => {
  it("should return the slug in lowercase when format is 'lower'", () => {
    const slug = "Test-Slug";
    const format = "lower";
    const result = formatLinkText(slug, format);
    expect(result).toBe("test slug");
  });

  it("should return the slug in capitalized format when format is 'capitalized'", () => {
    const slug = "test-slug";
    const format = "capitalized";
    const result = formatLinkText(slug, format);
    expect(result).toBe("Test Slug");
  });

  it("should return the slug in sentence format when format is 'sentence'", () => {
    const slug = "test-slug";
    const format = "sentence";
    const result = formatLinkText(slug, format);
    expect(result).toBe("Test slug");
  });

  it("should return the original slug when no format is provided", () => {
    const slug = "test-slug";
    const result = formatLinkText(slug);
    expect(result).toBe("test-slug");
  });

  it("should handle slugs with no separators", () => {
    const slug = "testslug";
    const format = "capitalized";
    const result = formatLinkText(slug, format);
    expect(result).toBe("Testslug");
  });
});
