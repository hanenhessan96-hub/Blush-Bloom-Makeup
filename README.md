# Blush Bloom — Makeup Brand Frontend

Responsive makeup storefront built with React, Vite, Bootstrap 5, Tailwind CSS, React Router and Lucide icons.

## Run locally
1. Install Node.js 18+ (Node.js 20 LTS recommended).
2. Extract this ZIP and open the folder in VS Code.
3. Open the VS Code terminal in this folder.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL shown in terminal (usually http://localhost:5173).

## Build for production
Run `npm run build`, then `npm run preview`.

## Pages
- `/` Home
- `/shop` catalogue with category filters and search
- `/about` brand story
- `/contact` contact form demo

## Notes
Product images are loaded from Unsplash, so internet is needed. The bag counter is a front-end demo and no checkout/payment is connected. Contact/newsletter forms are demos and need a backend/email service to receive real submissions. Replace placeholder contact details and product data before publishing. Bootstrap provides its CSS/grid; Tailwind utilities are configured, and the visual styling is in `src/styles.css`.
