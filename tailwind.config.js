/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f39c12',
          'yellow-hover': '#e67e22',
          'yellow-light': '#fef5e7',
          dark: '#1e2432',
          'dark-header': '#181d28',
          'dark-footer': '#161a23',
          'dark-surface': '#252c3c',
          gray: '#555e6d',
          'gray-light': '#f4f6f9',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
