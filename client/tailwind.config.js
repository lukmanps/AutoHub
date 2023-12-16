/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        normal: '#ff0000',
        light: '#ff2121',
        dark: '#d10202'
      },
      'secondary': '#383b3e',
      'light-gray': '#55585b',
      'ash-gray': '888b8e',
      'light-ash-gray': '#cacdd0',
      'white': 'ffffff',
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617'
      }
    },

    fontFamily: {
      sans: [
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