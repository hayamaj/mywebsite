/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
        'text-slide-3': 'text-slide-3 4.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'text-slide-3': {
            '0%, 26.66%': {
                transform: 'translateY(0%)',
            },
            '33.33%, 60%': {
                transform: 'translateY(-25%)',
            },
            '66.66%, 93.33%': {
                transform: 'translateY(-50%)',
            },
            '100%': {
                transform: 'translateY(-75%)',
            },
        },
    },
      colors: {
        "pm": "#000000",
        "eng": "#ce1126",
        "art": "#007a3d",
        "pm-light": "#c7c7c7",
        "eng-light": "#fac5cb",
        "art-light": "#aaffd4",
        "accent": "#5f39f4"
        
      },
      fontFamily: {
        sans: ['var(--font-didot)'],
        sans: ['var(--font-didotdf)'],
        serif: ['var(--font-proxnova)']
      },
      
    },
  plugins: [require("daisyui")],
  },
};
