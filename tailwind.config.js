/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: {
        600: '#0D9488'
      }
    }
  },
};
export const plugins = [];


