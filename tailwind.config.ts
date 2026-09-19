import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FDF9F0",
        surface: "#F7F3EA",
        ink: "#1C1C16",
        primary: "#2E251D",
        brown: "#695C53",
        green: "#586152",
        border: "#D1C4BC",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      spacing: {
        gutter: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
