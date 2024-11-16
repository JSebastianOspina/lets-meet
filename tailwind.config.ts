import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fdf0d5",
        connection: '#780000',
        perception: '#114B5F',
        reflection: '#003049',
      },
    },
  },
  plugins: [],
} satisfies Config;
