# Dolly Kushwaha — Personal Portfolio

A modern, premium portfolio website built with React + Vite + Tailwind CSS.

## 🚀 Setup & Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx         # Sticky nav with mobile hamburger
    Hero.jsx           # Hero section with photo and stickers
    About.jsx          # About + journey timeline
    Skills.jsx         # Skills cards by category
    Projects.jsx       # Project section container
    ProjectCard.jsx    # Individual project card with SVG previews
    Experience.jsx     # Education + certifications + highlights
    Contact.jsx        # Contact links + CTA
    Footer.jsx         # Footer

  data/
    portfolio.js       # All resume data (single source of truth)

  assets/
    dolly.jpg          # Your photo

public/
  resume.pdf           # ← PLACE YOUR RESUME PDF HERE
  favicon.svg

index.html
vite.config.js
```

## 📸 Photo

Your photo is currently cropped from the portfolio reference image.
Replace `src/assets/dolly.jpg` with your actual high-resolution photo.

## 📄 Resume

Place your resume PDF at `public/resume.pdf`.
The "Download Resume" button will automatically serve it.

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com → New Project → Import GitHub repo
3. Framework: Vite (auto-detected)
4. Deploy!

## 🌐 Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## ✏️ Update Content

All portfolio data lives in `src/data/portfolio.js`:
- Personal info, links, bio
- Education, skills, projects
- Journey timeline

## 🎨 Design Tokens

CSS variables in `src/index.css`:
- `--navy` / `--navy-light` — dark backgrounds
- `--lime` — accent color (#a3e635)
- `--cream` — light sections
- `--font-display` — Syne (headings)
- `--font-body` — Space Grotesk (body)
