import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10151F",
        steel: "#EEF1F3",
        concrete: "#D9DEE3",
        amber: "#F2A73B",
        circuit: "#2B4F73",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-ibm-plex-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
