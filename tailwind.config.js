/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#edf6ff",
          100: "#d6eaff",
          200: "#b5dbff",
          300: "#84c5ff",
          400: "#52a7ff",
          500: "#1f7eff",
          600: "#0a5fee",
          700: "#064bdd",
          800: "#0a3ab4",
          900: "#0f338f",
        },
      },
      backgroundImage: {
        "gradient-hero": "radial-gradient(circle at top left, rgba(82, 167, 255, 0.25), transparent 60%), radial-gradient(circle at bottom right, rgba(31, 126, 255, 0.2), transparent 55%)",
        "gradient-mesh": "radial-gradient(circle at 20% 20%, rgba(82, 167, 255, 0.35), transparent 50%), radial-gradient(circle at 80% 10%, rgba(10, 95, 238, 0.2), transparent 55%), radial-gradient(circle at 30% 80%, rgba(6, 75, 221, 0.18), transparent 60%)",
        "grid-dark": "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(31, 126, 255, 0.35)",
        "glow-lg": "0 0 60px rgba(31, 126, 255, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(31, 126, 255, 0.0)" },
          "50%": { boxShadow: "0 0 45px rgba(31, 126, 255, 0.25)" },
        },
        gradientDrift: {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(15px, -25px, 0) scale(1.05)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 9s ease-in-out infinite",
        "gradient-drift": "gradientDrift 16s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      backgroundSize: {
        18: "18px 18px",
      },
    },
  },
  plugins: [],
};
