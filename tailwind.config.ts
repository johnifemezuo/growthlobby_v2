import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        heroColor: "var(--heroColor)"
      },
      fontFamily: {
         wixMadefor: ['var(--font-wix-madefor)'],
        farro: "var(--font-farro), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
