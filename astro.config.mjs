import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://choctaw-nation.github.io',
    base: 'astro-bootstrap',
    build: {
        assets: 'dist',
    },
});
