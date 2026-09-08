# Renovatio App Website

Marketing site for the Renovatio App, hosted at [renovatio.app](https://renovatio.app).

Plain HTML/CSS/JS — no build step, no framework, no dependencies. Open `index.html` directly
in a browser to preview, or serve the folder with any static file server.

## Structure

```
index.html      Home page
privacy.html    Privacy policy (placeholder — fill in before launch)
terms.html      Terms of service (placeholder — fill in before launch)
css/styles.css  All styling, driven by CSS variables at the top of the file
js/main.js      Mobile nav toggle (the only JS on the site)
assets/         Images, screenshots, logo files
CNAME           Tells GitHub Pages this site serves renovatio.app
```

## Editing content

All page copy lives directly in the HTML files, wrapped in `[SQUARE BRACKETS]`. Search for
`[` to find every placeholder that still needs real copy. Colors, fonts, and spacing are
controlled by the `:root` variables at the top of `css/styles.css` — change those instead of
hunting through the rest of the file.

## Hosting: GitHub Pages + Namecheap DNS

This repo is deployed with GitHub Pages, serving straight from the `main` branch. See the
project's setup notes for the exact DNS records to add at Namecheap so `renovatio.app` points
here.
