import { describe, it, expect } from 'vitest';
import { customizeListElement } from '../../src/lib/generateCrumbs.ts';

describe('isLastElement', () => {
  it("customizeListElement - returns correct item by index when truncatedButtonShown is false", () => {
    const listElements = [{ text: "Home" }, { text: "About" }, { text: "Contact" }];
    const result = customizeListElement(1, false, listElements);
    expect(result).toEqual({ text: "About" });
  });

  it("customizeListElement - removes item at index 1 when truncatedButtonShown is true", () => {
    const listElements = [{ text: "Home" }, { text: "About" }, { text: "Contact" }];
    const result = customizeListElement(0, true, listElements);
    expect(result).toEqual([{ text: "Home" }, { text: "Contact" }]);
  });

  it("customizeListElement - returns undefined for out of bounds index", () => {
    const listElements = [{ text: "Home" }, { text: "About" }];
    const result = customizeListElement(5, false, listElements);
    expect(result).toBeUndefined();
  });
});