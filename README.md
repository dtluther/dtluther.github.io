# dtluther.github.io

Personal website built with React, TypeScript, and Vite.

## Development

This project uses:
- Node.js (see `.tool-versions` for version)
- Yarn 4 (via Corepack)
- React 18
- TypeScript
- Vite
- Tailwind CSS

### Setup
1. Install Node.js (recommended to use ASDF)
2. Enable Corepack: `corepack enable`
3. Install dependencies: `yarn install`

### Development Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process:
1. Builds the React application
2. Deploys to GitHub Pages
3. Site is available at https://dtluther.github.io

Note: Only the `main` branch can deploy to production.
