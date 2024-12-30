/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import image from "@rollup/plugin-image";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        agudisplay: ['"Agu Display"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        bodyColor: "#1a1c20", // Slightly darker background for elegance
        lightText: "#b3bcc9", // Softer text color for better readability
        boxBg: "linear-gradient(145deg, #23272e, #1d2127)", // More subtle gradient for boxes
        designColor: "#00d1ff", // A warmer shade of the original pink
        accentColor: "#00d1ff", // A bright accent color for contrast
        mutedText: "#737c86", // Muted text color for less emphasis
      },
      boxShadow: {
        shadowOne:
          "10px 10px 20px rgba(0, 0, 0, 0.5), -10px -10px 20px rgba(255, 255, 255, 0.1)", // Adding soft light and dark shadows
        shadowTwo: "5px 5px 15px rgba(0, 0, 0, 0.3)", // Subtle secondary shadow for smaller elements
        hoverGlow: "0px 0px 15px rgba(255, 87, 115, 0.6)", // Glow effect for hover states
      },

      borderRadius: {
        card: "20px", // Soft rounded corners for cards
        button: "30px", // Fully rounded buttons
      },
      spacing: {
        wide: "32px", // Consistent spacing for sections
        ultraWide: "48px", // Larger spacing for prominent areas
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in-out", // Smooth fade-in animation
        float: "float 3s ease-in-out infinite", // Gentle floating effect
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },

  plugins: [daisyui, image()],
};
