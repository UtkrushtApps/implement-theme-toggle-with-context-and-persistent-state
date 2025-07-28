## Task Overview
You are responsible for implementing a complete theme toggle feature for a React dashboard. The toggle must allow switching between light and dark modes, propagate the theme globally using context, and persist the selection across refreshes. The feature must also honor the user's system color preference on the first visit and keep the page's theme in sync with the user's choice at all times.

## Guidance  
- This project is a React dashboard structured in common industry style, with separate folders for context, components, hooks, and utilities.
- The app should use React Context to store and provide the current theme throughout the application, avoiding prop drilling.
- A custom hook is provided for theme consumption by any component.
- The theme must persist in localStorage and initialize on load from the last saved or system preference.
- The body class must always represent the current theme, and the UI should update immediately on toggle.
- Styling updates must be global and reflected instantly across all components.
- No setup or sample solutions are provided in this document.

## Objectives
- Implement and fix the theme logic so a user's selection in the toggle persists across reloads and is applied globally.
- Ensure the active theme is loaded intelligently: from prior localStorage value, or the user’s system's color preference, defaulting to light if neither is present.
- The React context must expose both the current theme and a way to change it.
- All components must access the theme value via context, never via props.
- Switching the theme must update the UI instantly, the body class, and persist the new selection for future visits.

## How to Verify
- When the theme toggle is clicked, the page should change theme immediately and the body class must update accordingly.
- Refreshing the page retains the last selected theme—confirmed via different browser/windows sessions.
- On first visit (no localStorage value), the theme should respect the user's system color preference.
- All text and background styling should match the currently active theme.
- The dashboard and any future components must consume the theme only from context, not via prop drilling.