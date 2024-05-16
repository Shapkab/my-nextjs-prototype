/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: {
          fuchsia50: "var(--color-fuchsia-50)",
          fuchsia300: "var(--color-fuchsia-300)",
          teal50: "var(--color-teal-50)",
          pink400: "var(--color-pink-400)",
          amber900: "var(--color-amber-900)",
        },
      },
      animation: {
        typewriter:
          "typewriter 2s steps(var(--animation-steps-250), end) forwards, blink 2s steps(10) forwards",
        slidein: "slidein 2s",
        blob: "blob 7s infinite",
      },
      keyframes: {
        typewriter: {
          from: {
            width: "0",
          },
          to: {
            width: "95%",
          },
        },
        blink: {
          from: {
            "border-right-color": "transparent",
          },
          to: {
            "border-right": "black",
          },
        },
        slidein: {
          from: {
            "margin-left": "100%",
            width: "300%",
          },
          to: {
            "margin-left": "0%",
            width: "100%",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
