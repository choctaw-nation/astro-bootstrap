# Astro x Bootstrap Starter Kit

Astro x Bootstrap helps CNO Developers start figuring out some of the features (usually JS) and basic Bootstrap configurations of a website before needing to go through the work of setting up data types in WordPress (i.e. Custom Post Types and Advanced Custom Field configurations). 

## Quick Start

1. Update `astro.config.mjs` base parameter to be the URL of the new repo you've created
2. Run the following command line script

```sh
npm i && npm start
```

---

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

---

## Changelog

### [1.1.0] - Feb 5, 2025

- Added: Changelog
- Added: Standard placeholder images (video, photo) are now in `src/assets/placeholders/*.jpg`
- Updated: The `Header` component more closely aligns to the basic config in the [CNO Template Theme](https://github.com/choctaw-nation/cno-template-theme/blob/main/wp-content/themes/cno-starter-theme/header.php) (aka uses the `.navbar` + `.navbar-expand-*` classes + the Offcanvas Component )
- Updated: Links now use new `BASE_URL` const, powered by `astro.config.mjs` file
- Updated: Quick Start has actual instructions for quickly starting
- Fixed: `_breakpoints.scss` now `use`s namespaced functions (instead of the deprecated global functions)
- Chore: Updated packages
- Chore: Removed unused astro integrations (RSS, Sitemap, MDX)

### [1.0.0] - Init!
