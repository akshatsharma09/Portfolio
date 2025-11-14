# Portfolio (Next.js + Tailwind + Framer Motion)

This repository contains a modern, responsive portfolio site built with Next.js, Tailwind CSS, and Framer Motion for smooth UI animations. It showcases skills in various technologies and includes sections for About, Skills, Projects, Experience, and Contact.

## Key Features
- Landing / Hero with animated CTA
- About, Skills, Projects, Experience, and Contact sections
- Framer Motion transitions and hover effects
- Responsive design with light theme
- Contact form and social links (GitHub, LinkedIn, GFG, LeetCode)

## Tech Stack
- Next.js (App Router)
- React + Framer Motion
- Tailwind CSS

## Quick Start (Windows PowerShell)

1. From the repository root install dependencies:

```powershell
cd 'C:\Users\DELL\OneDrive\Desktop\portfolio'
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Open http://localhost:3000 in your browser. To open from PowerShell:

```powershell
Start-Process 'http://localhost:3000'
```

## Build for Production

```powershell
npm run build
npm start
```

## Folder Structure (Important Files)

```
.
├─ components/         # React components (Navbar, Hero, Projects, ContactForm...)
├─ app/                # Next.js app directory (page.jsx, layout.jsx, head.jsx)
├─ styles/             # Tailwind globals
├─ next.config.js
└─ README.md
```

## Placeholders to Replace
- `components/ContactForm.jsx` — replace Formspree endpoint: `https://formspree.io/f/{your-id}` with your form ID.
- `components/ContactForm.jsx` — update social links (GitHub, LinkedIn, GFG, LeetCode) with your usernames.
- Add a `public/` directory for static assets like `resume.pdf` to enable the Download Resume button.

## Deploy to Vercel
1. Push repo to GitHub.
2. Create a new project in Vercel and connect your repository. Vercel should auto-detect this as a Next.js app. If your app is in a subfolder, set the Project Root accordingly.
3. (Optional) Set environment variables in Vercel if you add any (not required for the current scaffold).

## Customization / Next Steps
- Add project screenshots in `public/images` and use `<Image />` from `next/image`.
- Improve SEO: add Open Graph images and more metadata in `app/head.jsx`.

## Contact & Socials (Update These to Your Real Profiles)
- GitHub: https://github.com/xyz
- LinkedIn: https://www.linkedin.com/in/xyz
- GeeksforGeeks: https://auth.geeksforgeeks.org/user/xyz/profile
- LeetCode: https://leetcode.com/xyz

## License
This scaffold is provided as-is. Add a LICENSE file if you want an explicit license.
