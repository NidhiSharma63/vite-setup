// import { fetchUsers } from "../utils/useFetchUser";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import UserName from "../components/userName";

describe("userName", () => {
  it("should display 3 user name", async () => {
    render(<UserName />);
    const user = await screen.findAllByRole("listitem");
    console.log(user.length, "user");
    expect(user.length).toBe(3);
  });
});
