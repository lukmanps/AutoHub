/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        "Segoe UI",
        'Roboto',
        "Helvetica Neue",
        'Arial',
        "Noto Sans",
        'sans-serif',
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"],

      serif: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],

      mono: ['FMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },

    extend: {},
  },
  plugins: [],
}

// ['Merriweather', 'serif']