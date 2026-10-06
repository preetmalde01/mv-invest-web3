# MV Invest: Your Personal CIO

The website is a static site. `index.html` sits at the repository root, so it works on any static host with no build step.

## Run it locally

    python3 -m http.server 8000

Then open http://localhost:8000

## Run it from GitHub without GitHub Pages

- Codespaces: open the repo in a Codespace, run `python3 -m http.server 8000`, and open the forwarded port 8000 (keep it Private to stay unpublished).
- Or import the repo into Vercel, Netlify or Cloudflare Pages (no build command, output directory is the repo root).

## Structure

- `index.html`, `css/`, `js/`, `assets/`: the live static site
- `react-app/`: alternative React + Vite + Tailwind version (`cd react-app && npm install && npm run dev`)
