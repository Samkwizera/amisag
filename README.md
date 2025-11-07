# Amisag – AI-Powered Networking Landing Page

This repository contains the sleek marketing experience for **Amisag**, an AI-powered networking platform built to connect
students, professionals, and entrepreneurs across Africa with mentors, collaborators, and opportunities—without leaving home.

The landing page blends a clean, futuristic visual language with soft motion, glowing accents, and a black/white/gold/light-blue
palette to reflect the brand’s ambition and trustworthiness.

## Highlights

- **Hero showcase** with animated network orb, storytelling copy, and bold calls-to-action (“Join Now”, “Explore How It Works”).
- **About narrative** that introduces inclusive matchmaking, feedback-driven intelligence, and low-bandwidth reach, paired with
  illustrated profile stacks.
- **How it Works timeline** outlining the three-step journey from profile creation to AI-curated connections.
- **Feature spotlight** cards covering matchmaking, USSD/SMS access, private networking, and community experiences.
- **Testimonials grid** with founding-member quotes to reinforce credibility and social proof.
- **Magnetic CTA band** inviting visitors to get started for free or request early access, plus an interactive join modal.
- **Responsive design** tailored for mobile-first browsing with hover/scroll animations on modern devices.

## Getting Started

> **Note:** Installing JavaScript dependencies requires access to the public npm registry. If your environment blocks outbound
> network requests, mirror the dependencies (`react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `typescript`, and their
> TypeScript types) or install them on a machine with internet access and copy the resulting `node_modules` directory.

### Prerequisites

- Node.js 18+
- npm 9+ (or pnpm/yarn if you update the scripts accordingly)

### Installation

```bash
npm install
```

If the command fails because the registry is unreachable, follow the note above to supply the required packages manually.

### Development server

```bash
npm run dev
```

The Vite dev server defaults to [http://localhost:5173](http://localhost:5173). Pass `--host 0.0.0.0 --port <port>` to expose the
preview externally.

### Production build

```bash
npm run build
```

This will type-check the project with `tsc` and emit production assets in `dist/`.

## Project Structure

```
.
├── index.html          # Vite entry point
├── package.json
├── src
│   ├── App.tsx         # Landing page layout and interaction logic
│   ├── main.tsx        # React bootstrap
│   ├── styles.css      # Global styling & animations for the marketing site
│   └── vite-env.d.ts   # Vite type helpers
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## License

The project is released under the MIT License. See [`LICENSE`](LICENSE) for full terms.
