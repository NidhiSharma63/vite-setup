import sum from "../sum";
import { describe, expect, it } from "vitest";

describe("test for sum", () => {
  it("should retrun the sum 0", () => {
    const val = sum(0, 0);
    expect(val).toBe(0);
  });
});
