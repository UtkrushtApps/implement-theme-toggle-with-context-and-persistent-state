export function getPreferredTheme() {
  // Returns localStorage theme, else system preference, else "light"
  const stored = window.localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    return 'dark';
  return 'light';
}
