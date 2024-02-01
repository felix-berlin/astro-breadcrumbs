import { Truncated } from "../../src/lib/truncated.ts";
import { test, beforeEach, vi } from "vitest";
import { JSDOM } from "jsdom";

let instance: Truncated;
let callback: any;

beforeEach(() => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.customElements = dom.window.customElements;
  global.HTMLElement = dom.window.HTMLElement;
  global.ResizeObserver = class {
    constructor(cb: any) {
      callback = cb;
    }
    observe(entry: any) {
      callback([entry]);
    }
    unobserve() {}
    disconnect() {}
  };

  // Define the Truncated custom element
  class Truncated extends HTMLElement {
    constructor() {
      super();
      // Your custom element's constructor logic here
    }
  }

  // Register the Truncated custom element
  global.customElements.define("x-truncated", Truncated);

  instance = new Truncated();
  instance.toggleTruncated = vi.fn();
});

test("triggers toggleTruncated with true when overflowing", () => {
  const entry = { target: { clientWidth: 100 } };

  // Create a new ResizeObserver and observe the entry
  const resizeObserver = new global.ResizeObserver((entries) => {
    // Call instance.toggleTruncated inside the callback
    if (entries[0].target.clientWidth < 200) {
      instance.toggleTruncated(true);
    }
  });

  resizeObserver.observe(entry);

  // Simulate a change in the entry's size
  entry.target.clientWidth = 50;

  // Call the callback with the updated entry
  callback([entry]);

  // Check that instance.toggleTruncated was called with the argument [true]
  expect(instance.toggleTruncated).toHaveBeenCalledWith(true);
});
