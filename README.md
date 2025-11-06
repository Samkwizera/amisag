# Amisag – Pan-African Networking Platform

Amisag is a modern, AI-assisted networking experience tailored for students, professionals, and entrepreneurs across Africa. The prototype included here demonstrates the core product flow: onboarding, intelligent matchmaking, connection actions, messaging, community groups, an analytics-driven admin console, and low-bandwidth access guidance.

## Features

- **Multi-language onboarding** with editable profiles capturing skills, interests, goals, and preferred industries.
- **AI matchmaking mock** that ranks relevant connections, surfaces Accept/Skip/Decline actions, and learns from user feedback.
- **Conversation hub** combining one-to-one mentorship chats with community spaces for topical collaboration.
- **Admin dashboard** summarising engagement analytics and the recommendation feedback loop.
- **Low-bandwidth support** card outlining USSD/SMS entry points for members with limited connectivity.
- **Responsive design** optimised for mobile with a clean blue/white/gold palette.

## Getting Started

> **Note:** Installing JavaScript dependencies requires access to the public npm registry. If your environment blocks outbound network requests, you will need to mirror the dependencies (`react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `typescript`, and their TypeScript types) or install them on a machine with internet access and copy the resulting `node_modules` directory.

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

The Vite dev server defaults to [http://localhost:5173](http://localhost:5173).

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
│   ├── App.tsx         # Main application shell and feature modules
│   ├── main.tsx        # React bootstrap
│   ├── styles.css      # Global styling in brand colours
│   └── vite-env.d.ts   # Vite type helpers
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Feedback Loop Example

The matchmaking mock uses a lightweight scoring engine that:

1. Parses the user profile for skill, interest, goal, and industry keywords.
2. Scores the sample network against those tokens.
3. Adjusts weighting based on Accept/Skip/Decline feedback to emulate a learning system.

This creates a visible feedback loop on both the user-facing connection feed and the admin dashboard analytics.

## License

The project is released under the MIT License. See [`LICENSE`](LICENSE) once added for full terms.
