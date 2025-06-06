import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow)",
        heading: "#ffffff",
        paragraph: "#b0adad",
        link: "#ffffff",
        "link-hover": "#8A8A8A",
      },
      fontFamily: {
        "poppins": ["var('--font-poppins')"],
      },
      screens: {
        'xs': '360px',     // Extra small devices (custom)
        'sm': '640px',     // Small devices (default)
        'md': '768px',     // Medium devices (default)
        'lg': '1024px',    // Large devices (default)
        'xl': '1280px',    // Extra large devices (default)
        '2xl': '1536px',   // 2x Extra large (default)
        '3xl': '1800px',   // Custom: very large screens
      },
      fontSize: {
        h1: ["30px", { lineHeight: "2.5rem" }],
        h2: ["1.5rem", { lineHeight: "2.25rem" }],
        h3: ["1.25rem", { lineHeight: "1.75rem" }],
        h4: ["1rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        small: ["0.875rem", { lineHeight: "1.25rem" }],
        paragraph: ["0.75rem", { lineHeight: "1.2rem" }],
        link: ["0.95rem", { lineHeight: "1.5rem" }],
      },
    },
  },
  plugins: [],
};
export default config;
