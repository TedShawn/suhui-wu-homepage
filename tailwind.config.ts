import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        ocean: "#12355b",
        glacier: "#e7f0f8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 12px 32px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
