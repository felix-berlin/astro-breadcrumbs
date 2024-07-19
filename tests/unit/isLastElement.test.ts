import { describe, it, expect } from 'vitest';
import { isLastElement } from '../../src/lib/helper.ts';

describe('isLastElement', () => {
  it('should return true if index is the last element', () => {
    const array = [1, 2, 3];
    const index = 2; // Last element's index
    expect(isLastElement(index, array)).toBe(true);
  });

  it('should return false if index is not the last element', () => {
    const array = [1, 2, 3];
    const index = 1; // Not the last element's index
    expect(isLastElement(index, array)).toBe(false);
  });

  it('should return false for an empty array', () => {
    const array = [];
    const index = 0; // No elements in the array
    expect(isLastElement(index, array)).toBe(false);
  });
});
