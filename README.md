# Neiloy Chaudhuri - Personal Website

A modern, production-ready personal website built with Next.js 15, React 19, Tailwind CSS, Framer Motion, and next-themes.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theming**: next-themes (dark/light mode)
- **Icons**: react-icons
- **Font**: Manrope (via Google Fonts)
- **Deployment**: Optimized for Vercel

## Features

- 🎨 Earth-tone color palette with glassmorphism effects
- 🌓 Dark/light mode with system preference detection
- ✨ Smooth page transitions and scroll animations
- 📱 Fully responsive design
- 🎯 SEO optimized with metadata
- ⚡ Fast performance with Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar, footer, theme provider
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── projects/page.tsx   # Projects page
│   ├── experience/page.tsx # Experience page
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navbar with hide/show on scroll
│   ├── Footer.tsx          # Minimal footer
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── PageTransition.tsx  # Page animation wrapper
│   ├── ProjectCard.tsx     # Glassmorphic project card
│   ├── ExperienceCard.tsx  # Timeline experience card
│   └── SocialIcon.tsx      # Animated social icon button
├── public/
│   └── Neiloy_Chaudhuri_Resume.pdf  # Resume file (add your own)
├── tailwind.config.js      # Tailwind configuration with custom colors
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Resume

Add your resume PDF file to the `public/` folder with the name `Neiloy_Chaudhuri_Resume.pdf`.

## Deployment

This site is optimized for deployment on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

Or deploy with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js` under `theme.extend.colors.earth`.

### Content

- **Projects**: Edit `app/projects/page.tsx` to update project data
- **Experience**: Edit `app/experience/page.tsx` to update work experience
- **Contact**: Edit `app/contact/page.tsx` to update social links

## License

MIT License - feel free to use this template for your own personal website.
