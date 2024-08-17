import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import { type RouteOptions, type AstroIntegrationLogger } from "astro";


// https://astro.build/config
export default defineConfig({
  integrations: [
    setLocalPrerender()
  ],
  adapter: node({
    mode: "standalone"
  }),
  // https://lucia-auth.com/guides/validate-session-cookies/astro
  security: {
    checkOrigin: true
  },
  output: "hybrid"
});

function setLocalPrerender() {
  return {
    name: 'set-prerender',
    hooks: {
      // https://astro.build/blog/astro-4140/#deprecate-support-for-dynamic-prerender-values
      // https://docs.astro.build/en/reference/integrations-reference/#astroroutesetup
      'astro:route:setup': (options: { route: RouteOptions, logger: AstroIntegrationLogger }) => {
        // https://docs.astro.build/en/guides/server-side-rendering/#opting-out-of-pre-rendering-in-hybrid-mode
        if (options.route.component.startsWith('src/pages/prerender.astro') || options.route.component.startsWith('src/pages/api/')) {
          options.logger.info(`Prerender for ${options.route.component} disabled`);
          options.route.prerender = false;
        }
      },
    },
  };
}
