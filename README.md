# Marketing site for AllRoads Analytics

Live site: www.allroadsanalytics.com/

Hosted on Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f7d701c-2642-4f89-9000-1a26dadca88b/deploy-status)](https://app.netlify.com/sites/flamboyant-franklin-d17b63/deploys)

## Contents 	

- [Project overview](#project-overview)
- [Getting started](#getting-started)
	- [Install dependencies](#install-dependencies)
	- [Working locally](#working-locally)
	- [Creating a production build](#creating-a-production-build)

---

## Project Overview 

- The project uses [Eleventy](https://11ty.dev) as a static site generator.
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/).
- PostCSS set up to handle:
	- TailwindCSS
	- CSS Imports
	- Autoprefixer 
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- HTML minified in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally
Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build
Minify HTML, minify JS, inline and minify CSS.

``` 
npm run build
```

---

#### Credits 

- [Eleventy](https://11ty.dev)
- [Eleventy Web Starter](https://eleventywebstarter.netlify.app)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
	- Autoprefixer
	- PostCSS Import
- [esbuild](https://esbuild.github.io/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)
