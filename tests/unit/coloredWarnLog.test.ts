import { coloredWarnLog } from "../../src/lib/helper.ts";

describe("coloredWarnLog", () => {
  it("should log the correct message and badge text", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation();

    const message = "Test message";
    const badgeText = "Test badge";

    coloredWarnLog(message, badgeText);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "\x1b[43m",
      badgeText,
      "\x1b[0m",
      "\x1b[33m",
      message,
      "\x1b[0m",
    );

    consoleWarnSpy.mockRestore();
  });
});
