# setup : vite+vitest+msw+testing-library

### step-1

```
npm create vite
```

### Installing dependencies

```
npm install
```

### Running server

```
npm run dev
```

### Adding testing library

```
npm i @testing-library/react
```

### Adding Dom

```
npm i jsdom
```

or

```
npm i @testing-library/jest-dom
```

### Installing `msw` for mocking

```
npm install msw --save-dev
```

### setup of vite config with msw

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup.Js"],
  },
});

```

### Setup of MSW

`src/mocks/server.js`

```
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.

export const server = setupServer(...handlers);


```

`src/mocks/handler.js`

visit [msw](https://mswjs.io/docs/getting-started/mocks/rest-api)

`src/setupTests.js`

```
// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
```
