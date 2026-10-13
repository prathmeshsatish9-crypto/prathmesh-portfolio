# Prathmesh Shelar — AI & Data Science Portfolio

A responsive, accessible portfolio for an undergraduate Artificial Intelligence engineering student. Built with React 19, TypeScript, Vite, Tailwind CSS v4, Lucide, and TanStack Start (the routing/full-stack framework provided by this Lovable project).

## Run locally

Use Node.js **22.12 or newer**, and npm, or Bun 1.2+.

```sh
npm install
npm run dev
```

Open the local URL printed in your terminal. Alternatively:

```sh
bun install
bun run dev
```

Quality checks:

```sh
npm test
npm run lint
```

## Folder structure

```text
src/
  assets/neural-sculpture.jpg    Generated decorative artwork (not a profile photo)
  components/
    portfolio.tsx              Shared navigation, footer, portfolio sections, resume button
    ui/                        Reusable design controls
  lib/
    portfolio.ts               Editable personal details, projects, social links, learning topics
    metadata.ts                Page-specific search/social metadata helper
  routes/
    __root.tsx                 Shared shell, font loading, accessibility skip link
    index.tsx                  Full portfolio homepage
    about.tsx                  About, skills, education, learning
    projects.tsx               Filterable project gallery
    resume.tsx                 PDF availability and download/email fallback
    contact.tsx                Working email link and optional social profiles
  styles.css                   Semantic design tokens and responsive layout
  router.tsx                   TanStack router setup
  routeTree.gen.ts             Automatically generated; do not edit
  server.ts                    Existing framework server entry
public/                        Files served directly, including your future resume.pdf
vite.config.ts                 Vite/framework integration
```

## Customize your portfolio

### Personal details and social profiles

Edit `src/lib/portfolio.ts`. Set `github` and `linkedin` to your real full HTTPS profile URLs. Until configured, these appear as non-clickable “Soon” labels, never guessed URLs. The email links open the visitor's email application. No nonfunctional contact form is included.

Long-form education and introduction copy is in the named sections in `src/components/portfolio.tsx`; the hero is in `src/routes/index.tsx`. SEO text is in each page's `head()` call. Fonts load in the root route. Colors, spacing, and animations are centralized in `src/styles.css`; use semantic roles rather than adding hardcoded colors to components. The site intentionally prioritizes one polished dark theme rather than a light/dark toggle.

### Add real projects

Replace entries in the `projects` array in `src/lib/portfolio.ts`. Each initial card is explicitly a placeholder, not completed work. A real entry can look like this (replace all example values):

```ts
{
  id: "your-unique-project-id",
  title: "Your real project name",
  description: "What you built, what problem it solves, and what you learned.",
  category: "Data analysis", // or "Machine learning" or "Python"
  technologies: ["Python", "Pandas"],
  placeholder: false,
  repository: "https://github.com/YOUR-USERNAME/YOUR-REPOSITORY",
  // demo: "https://YOUR-REAL-DEMO-URL", // optional; omit if unavailable
}
```

Do not add repository or demo URLs until they actually exist. Both the home gallery and Projects page read this array. Optional links render only when supplied. Add new categories to the project type and filter list together if needed.

### Update learning topics

Edit the `learning` array in `src/lib/portfolio.ts`. Update current skill categories in `SkillsSection` as you progress. Keep the learning labels honest; no invented proficiency percentages.

### Upload your resume

1. Place your actual PDF at `public/resume.pdf`.
2. Or change `portfolio.resumePath` to another local path, e.g. `/documents/prathmesh-resume.pdf`, and upload to the matching `public/documents/` directory.
3. Keep it a real PDF served with `application/pdf`, not a renamed Word document.
4. Open the Resume page: it checks the file and enables download only when the response is a PDF. A missing file or HTML fallback displays “coming soon” and a working email request instead.

## Deployment

This is **TanStack Start with server rendering**, not a plain static Vite SPA. Do not upload only `dist`, add SPA rewrite rules, or remove the existing server entry. Hosting adapter output differs by provider.

### Vercel

1. Export/sync the source to your GitHub repository, then import it in Vercel.
2. Select the Vite framework preset and Node.js 22.x.
3. Set the build command to `npm run build` (or `bun run build`).
4. Set the environment variable `NITRO_PRESET=vercel` for production/preview builds. Do not set Lovable's internal `LOVABLE_NITRO_PRESET` variable on external hosts.
5. Leave output handling to Nitro/Vercel's generated adapter (`.vercel/output`); do not override it with `dist` or treat `.output` as a static publish folder.
6. Deploy, then verify `/`, `/about`, `/projects`, `/resume`, and `/contact` load directly and on refresh.

### Netlify

1. Import the repository into Netlify and select Node.js 22.x.
2. Set build command `npm run build` and environment variable `NITRO_PRESET=netlify`.
3. Set publish directory `.output/public`. Nitro generates the server functions needed for rendered routes.
4. Do not add a `/* /index.html 200` SPA redirect; the adapter handles routing.
5. Deploy and check the same routes, plus resume downloads once a PDF is uploaded.

The Vite integration supports Nitro target auto-detection outside Lovable; the explicit environment preset makes the intended target clear. Host deployment has not been performed or verified here. If a host changes its adapter detection, consult its current TanStack Start/Nitro hosting guidance. You can also publish directly from Lovable without changing the existing config.

## Verification and honest content

Verified in the running preview: home render, project filtering, resume-missing fallback, mailto destinations, mobile navigation, no horizontal overflow at a 390px width, and no browser runtime errors in those flows. No profile URLs, professional achievements, completed projects, proficiency scores, or resume have been invented. Real projects, social profiles, and the PDF remain yours to supply.
