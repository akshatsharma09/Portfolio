# Portfolio (Next.js + Tailwind + Framer Motion)

This repository contains a modern, responsive portfolio site built with Next.js, Tailwind CSS, and Framer Motion for smooth UI animations. It showcases skills in various technologies and includes sections for About, Skills, Projects, Experience, and Contact.

Key features
- Landing / Hero with animated CTA
- About, Skills, Projects, Experience, and Contact sections
- Framer Motion transitions and hover effects
- Responsive and dark-mode-ready styles (Tailwind)
- Contact form (Formspree placeholder) and social links (GitHub, LinkedIn, GFG, LeetCode)

Tech stack
- Next.js (App Router)
- React + Framer Motion
- Tailwind CSS
- Optional: React Three Fiber / three.js (placeholder included)

Quick start (Windows PowerShell)

1. From the repository root install dependencies. If you hit peer dependency issues, use the legacy flag (this repo currently works with --legacy-peer-deps):

```powershell
cd 'C:\Users\DELL\OneDrive\Desktop\portfolio'
npm install --legacy-peer-deps
```

2. Start the dev server

```powershell
npm run dev
```

3. Open http://localhost:3000 in your browser. To open from PowerShell:

```powershell
Start-Process 'http://localhost:3000'
```

Build for production

```powershell
npm run build
npm start
```

Folder structure (important files)

```
.
├─ components/         # React components (Navbar, Hero, Projects, ContactForm...)
├─ app/                # Next.js app directory (page.jsx, layout.jsx, head.jsx)
├─ styles/             # Tailwind globals
├─ next.config.js
└─ README.md
```

Placeholders you should replace
- `components/ContactForm.jsx` — replace Formspree endpoint: `https://formspree.io/f/{your-id}` with your form ID.
- `components/ContactForm.jsx` — update social links (GitHub, LinkedIn, GFG, LeetCode) with your usernames.
- Add a `public/` directory for static assets like `resume.pdf` to enable the Download Resume button.

Deploy to Vercel
1. Push repo to GitHub.
2. Create a new project in Vercel and connect your repository. Vercel should auto-detect this as a Next.js app. If your app is in a subfolder, set the Project Root accordingly.
3. (Optional) Set environment variables in Vercel if you add any (not required for the current scaffold).

Troubleshooting
- If Next warns about root detection (multiple lockfiles), I set `turbopack.root` in `next.config.js` to the repo root to silence that warning.
- If `npm install` fails with peer dependency errors for `@react-three/fiber` / `@react-three/drei`, run:

```powershell
npm install --legacy-peer-deps
```

or ask me to pin compatible versions (I can update `package.json` and re-run install without the flag).

Customization / next steps
- Replace the hero 3D placeholder with a small React Three Fiber model (I can add a rotating cube or a GLTF model).
- Add project screenshots in `public/images` and use `<Image />` from `next/image`.
- Improve SEO: add Open Graph images and more metadata in `app/head.jsx`.

Contact & socials (update these to your real profiles)
- GitHub: https://github.com/xyz
- LinkedIn: https://www.linkedin.com/in/xyz
- GeeksforGeeks: https://auth.geeksforgeeks.org/user/xyz/profile
- LeetCode: https://leetcode.com/xyz

License
This scaffold is provided as-is. Add a LICENSE file if you want an explicit license.

If you'd like, I can now:
- Replace the example social links with your actual profile URLs, or
- Add a small React Three Fiber floating model in the hero, or
- Pin three/fiber/drei versions in `package.json` so `npm install` works without `--legacy-peer-deps`.

- Add unit tests and linting.
