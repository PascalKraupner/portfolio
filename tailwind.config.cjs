/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-color": "var(--color-text-primary)",
        "dark-color": "var(--color-background-primary)",

        "primary-color": "var(--color-primary)",
        "primary-color-lighter": "var(--color-primary-lighter)",
        "primary-color-lightest": "var(--color-primary-lightest)",
        "primary-color-darker": "var(--color-primary-darker)",
        "primary-color-darkest": "var(--color-primary-darkest)",

        "secondary-color": "var(--color-secondary)",
        "secondary-color-lighter": "var(--color-secondary-lighter)",
        "secondary-color-darker": "var(--color-secondary-darker)",

        success: "var(--color-success)",
        "success-lighter": "var(--color-success-lighter)",
        "success-darker": "var(--color-success-darker)",

        danger: "var(--color-danger)",
        "danger-lighter": "var(--color-danger-lighter)",
        "danger-darker": "var(--color-danger-darker)",

        warning: "var(--color-warning)",
        "warning-lighter": "var(--color-warning-lighter)",
        "warning-darker": "var(--color-warning-darker)",

        info: "var(--color-info)",
        "info-lighter": "var(--color-info-lighter)",
        "info-darker": "var(--color-info-darker)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        "primary-dark": "var(--color-text-primary-dark)",
        secondary: "var(--color-text-secondary)",
        terminal: "#00FF00",
      },
      backgroundColor: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      boxShadowColor: {
        default: "var(--color-shadow)",
        glow: "var(--color-glow)",
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("tailwind-gradient-mask-image"),
  ],
};
