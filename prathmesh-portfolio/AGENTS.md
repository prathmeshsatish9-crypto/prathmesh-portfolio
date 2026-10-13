<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep React, Vite, Tailwind, and TanStack Start routing; content pages use their own route metadata so navigation and sharing stay reliable.
- Keep editable identity, social URLs, learning topics, and projects in src/lib/portfolio.ts; shared portfolio sections live in src/components/portfolio.tsx to prevent duplicated content.
- Define visual roles in src/styles.css and use the existing Button component for controls so the design stays consistent.
- Verify PDF response content type before offering a resume download; SPA fallback responses must not masquerade as resumes.
- Unconfigured social profiles are noninteractive status labels; never create guessed profile destinations.
