# xyz — Portfolio (Next.js + Tailwind + Framer Motion)

This repository contains a Next.js portfolio site for `xyz` (AI/ML student). The Next.js app lives at the repository root in this workspace. It uses Tailwind CSS and Framer Motion for styling and animations.

Quick start (Windows PowerShell)

1. Install dependencies

```powershell
cd 'C:\Users\DELL\OneDrive\Desktop\portfolio'
npm install --legacy-peer-deps
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
npm start
```

Notes

- Replace the placeholder links (resume.pdf, GitHub/LinkedIn/LeetCode) with your actual targets.
- The contact form uses a placeholder Formspree endpoint — replace `https://formspree.io/f/{your-id}` with your form ID in `components/ContactForm.jsx`.
- For a visual upgrade add a React Three Fiber model into `components/Hero.jsx` (a placeholder is included).

Deploy

1. Push this repo to GitHub.
2. Connect the repository in Vercel. The project root is this repository (leave the root field empty) — Vercel should auto-detect Next.js. If you instead keep a separate folder for the app, set the root accordingly.

Optimizations / next steps

- Add `resume.pdf` to `public/`.
- Add images (optimized & lazy-loaded) in `public/images` and use Next.js `next/image` when appropriate.
- Add unit tests and linting.
