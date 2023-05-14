import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    console.log("Mocking request to /api/users");
    //  return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Joy",
          id: 1,
        },
        {
          name: "Peter",
          id: 2,
        },
        {
          name: "Elon",
          id: 3,
        },
      ])
    );
  }),
];
