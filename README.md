# Portfolio Website

A minimalist portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to showcase design work with a clean, modern aesthetic.

## Features

- Clean, minimalist design with a nude color palette
- Smooth page transitions and animations
- Responsive layout for all screen sizes
- Portfolio categorization (Branding, UX/UI, Illustration)
- GitHub Pages deployment ready
- Built with modern tech stack:
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Router (HashRouter for GitHub Pages compatibility)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

1. Update the designer information in:

   - `src/components/Layout.tsx` (name and social links)
   - `src/pages/About.tsx` (bio and portrait)
   - `src/pages/Portfolio.tsx` (project data)

2. Replace placeholder images with actual portfolio work

3. Customize the color scheme in `tailwind.config.js`

## Deployment

1. Update the `homepage` field in `package.json` with your GitHub Pages URL

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

```
src/
├── components/
│   └── Layout.tsx
├── pages/
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   └── About.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
