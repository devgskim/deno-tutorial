// deno run --allow-net --allow-read webserver.ts

import { serve } from 'https://deno.land/std/http/server.ts'
const s = serve({ port: 9000 })
console.log(`🦕 Deno server running at http://localhost:9000/ 🦕`)
for await (const req of s) {
  req.respond({ body: 'Hello from your first Deno server!!!' })
}