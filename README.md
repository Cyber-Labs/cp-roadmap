# Competitive Programming Guide

A complete roadmap for competitive programming

View live at https://cp.cyberlabs.club

[![Netlify Status](https://api.netlify.com/api/v1/badges/eabe06b5-4428-4df6-801b-79c13d17b951/deploy-status)](https://app.netlify.com/sites/cp-cyberlabs/deploys)

## Want to contribute ?

Refer our [CONTRIBUTING.md](https://github.com/Cyber-Labs/cp-roadmap/blob/master/CONTRIBUTING.md) for "How to contribute ?".

## Built With

- [Docusaurus 2](https://v2.docusaurus.io/)

## Running

1. After cloning this repository, run the following command in your terminal :

```
npm install
```

2. Then run `npm start` :

```
npm start
```

3. The website will start running at http://localhost:3000/

## File Structure

- [blog](#blog)
- [docs](#docs)
  - `roadmap`
  - `tools.md`
- [src](#src)
  - `css`
  - `pages`
- [static](#static)
  - `img`
- `sidebars.js`
- `docusaurus.config.js`

### Blog

- The `blog` directory contains the blog files with names in the format `YYYY-MM-DD-my-blog-post-title.md`
- For the format of content of a blog file, you may refer any of the blogs present already or refer [adding a blog post](https://v2.docusaurus.io/docs/blog/#adding-posts)

### Docs

- The `docs` directory contains markdown files for content of the `roadmap` and `tools` sections.
- Every document has a unique `id`
- For all the files, whose link should appear in the sidebar, the details should be added in the file `sidebars.js`. For more details, refer [sidebar object](https://v2.docusaurus.io/docs/docs-introduction#sidebar-object)

### Src

- Contains the code in ReactJS for the home page and the styling of website.

### Static

- All the static images, etc. used in the website are placed in the `static/img` directory.
