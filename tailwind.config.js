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
      // colors: {
      //   primary: "black",
      //   secondary: {
      //
      //   }
      // },
      animation: {
        typewriter:
          "typewriter 2s steps(var(--animation-steps-250), end) forwards, blink 2s steps(10) forwards",
        slidein: "slidein 2s",
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
      },
    },
  },
  plugins: [],
};
