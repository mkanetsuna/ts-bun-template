import { serve } from "bun";

const port = process.env.PORT || 8080;

const server = serve({
  port: Number(port),
  fetch(req) {
    return new Response("Welcome to the TypeScript Bun server!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);