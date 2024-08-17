import type { APIContext, MiddlewareNext } from "astro";


export async function onRequest(ctx: APIContext, next: MiddlewareNext) {
  /*
  You have to set `ctx.cookies` to get the following warning. Manipulating the `response.headers` does not have the effect.
  [WARN] `Astro.request.headers` is unavailable in "static" output mode, and in prerendered pages within "hybrid" and "server" output modes.
  If you need access to request headers, make sure that `output` is configured as either `"server"` or `output: "hybrid"` in your config file,
  and that the page accessing the headers is rendered on-demand.
  */
  /* @ts-ignore */
  const c = ctx.cookies.get("cookiename")?.value ?? null;
  const response = await next();
  response.headers.set('X-Middleware', 'yes');
  return response;
}
