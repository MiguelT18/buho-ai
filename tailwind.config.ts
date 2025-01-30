import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "clamp(14px, 3vw, 16px)",
        md: "clamp(20px, 4vw, 22px)",
        lg: "clamp(26px, 6vw, 34px)",
      },
      colors: {
        "dark-background": "#09090B",
        "light-background": "#dfdfdf",
        "difuminate-text-dark": "#A1A1AA",
        "difuminate-text-light": "#64748B",
        "light-gray": "#27272A",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(0deg, #0E0E10 0%, #1D1D1F 200%)",
        "gradient-light": "linear-gradient(0deg, #D1D1D3 0%, #E5E5E7 200%)",
      },
    },
  },
  plugins: [],
};
export default config;
