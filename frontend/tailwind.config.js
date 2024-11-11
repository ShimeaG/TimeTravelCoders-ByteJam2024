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
        glass: "rgba(0, 0, 0, .50)",
        glassReflection: "rgba(212, 223, 255, 1)",
        bgBlurColor: "rgba(0, 0, 0, .7)"
      },
    },
  },
  plugins: [],
};
