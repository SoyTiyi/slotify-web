import { serve } from "bun";
import { join } from "path";
import index from "./index.html";

const isDevelopment = process.env.NODE_ENV !== "production";
const distPath = join(import.meta.dir, "../dist");

const server = isDevelopment
  ? serve({
      routes: {
        // Development routes with automatic TypeScript/JSX compilation
        "/*": index,

        "/api/hello": {
          async GET() {
            return Response.json({
              message: "Hello, world!",
              method: "GET",
            });
          },
          async PUT() {
            return Response.json({
              message: "Hello, world!",
              method: "PUT",
            });
          },
        },

        "/api/hello/:name": async req => {
          const name = req.params.name;
          return Response.json({
            message: `Hello, ${name}!`,
          });
        },
      },

      development: {
        // Enable browser hot reloading in development
        hmr: true,

        // Echo console logs from the browser to the server
        console: true,
      },
    })
  : serve({
      async fetch(req) {
        const url = new URL(req.url);

        // API routes
        if (url.pathname.startsWith("/api/")) {
          if (url.pathname === "/api/hello") {
            if (req.method === "GET") {
              return Response.json({
                message: "Hello, world!",
                method: "GET",
              });
            }
            if (req.method === "PUT") {
              return Response.json({
                message: "Hello, world!",
                method: "PUT",
              });
            }
          }

          const nameMatch = url.pathname.match(/^\/api\/hello\/(.+)$/);
          if (nameMatch) {
            return Response.json({
              message: `Hello, ${nameMatch[1]}!`,
            });
          }

          return new Response("Not Found", { status: 404 });
        }

        // In production, serve static files from dist directory
        const filePath = join(distPath, url.pathname === "/" ? "index.html" : url.pathname);
        const file = Bun.file(filePath);

        if (await file.exists()) {
          return new Response(file);
        }

        // For SPA routing - serve index.html for non-existent routes
        const indexFile = Bun.file(join(distPath, "index.html"));
        return new Response(indexFile);
      },
    });

console.log(`🚀 Server running at ${server.url}`);
