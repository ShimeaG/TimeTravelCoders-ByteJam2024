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
        glass: "rgba(212, 223, 255, .05)",
        glassReflection: "rgba(212, 223, 255, .70)",
        bgBlurColor: "rgba(224, 224, 224, .3)"
      },
    },
  },
  plugins: [],
};
