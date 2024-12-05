/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        cream: '#F5F5F0',
        'cream-darker': '#E8E8E0',
        'black-soft': '#1A1A1A',
        'black-muted': '#2A2A2A',
      },
    },
  },
  plugins: [],
};
