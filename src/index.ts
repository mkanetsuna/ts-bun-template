import { serve } from 'bun';

const port = process.env.PORT || 8080;

export default {
  port: Number(port),
  fetch(req: Request): Response {
    return new Response("Welcome to the TypeScript Bun server with hot reload!");
  },
};

console.log(`Listening on http://localhost:${port}`);

// ホットリロードのサポート
if (process.env.BUN_ENV === "development") {
  console.log("🔥 Hot reload enabled");
}