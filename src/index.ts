import { serve } from "bun";

const server = serve({
  port: 3000,
  fetch(req) {
    return new Response("Welcome to the TypeScript Bun server!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);