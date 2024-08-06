import { APIContext, MiddlewareNext } from 'astro';
import type { APIContext, MiddlewareNext } from 'astro';

export async function onRequest(ctx: APIContext, next: MiddlewareNext) {
  const response = await next();
  response.headers.set('X-Middleware', 'yes');
  return response;
}
