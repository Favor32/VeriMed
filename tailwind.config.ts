import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      colors: {
        solana: {
          purple: "#9945FF",
          green: "#14F195",
          dark: "#0A0A1A",
          card: "#0D1117",
          border: "#1E2A3A",
        },
      },
      backgroundImage: {
        "solana-gradient": "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
        "dark-mesh":
          "radial-gradient(at 40% 20%, hsla(270,100%,12%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(160,100%,10%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(270,100%,8%,1) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
