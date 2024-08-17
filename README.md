# astro-auth-middleware-test

This is a Minimal, Reproducible Example for the following warning message with Astro 4.14.2 and `output: "hybrid"`:

> [WARN] `Astro.request.headers` is unavailable in "static" output mode, and in prerendered pages within "hybrid" and "server" output modes. If you need access to request headers, make sure that `output` is configured as either `"server"` or `output: "hybrid"` in your config file, and that the page accessing the headers is rendered on-demand.

It's only mandatory to read coockie value (which is typical for authorization implementations) from context within a middleware funciton to get this warning.

[Edit in StackBlitz⚡️](https://stackblitz.com/~/github.com/RaphaelBossek/astro-auth-middleware-test)
