/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/images/**/*.{jpg,jpeg,png,svg}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./images/background.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glass: "rgba(0, 0, 0, .7)",
        glassReflection: "rgba(255, 255, 255, .6)",
        bgBlurColor: "rgba(0, 0, 0, 1)"
      },
    },
  },
  plugins: [],
};
