const { fontFamily } = require("tailwindcss/defaultTheme")

// Color Pallete Based On: https://coolors.co/587291-2f97c1-1ccad8-15e6cd-11eea1-0cf574
// Font: DM Sans, Arial

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-dm)", ...fontFamily.sans],
            },
            colors: {
                turquoise: "#15E6CD",
                purple: "#7e5bef",
                pink: "#ff49db",
                orange: "#ff7849",
                springGreen: "#0CF574",
                mediumSpringGreen: "#11EEA1",
                grayweb: "#565254",
                snow: "#FFFBFE",
                yellow: "#ffc82c",
                "gray-dark": "#273444",
                gray: "#8492a6",
                "gray-light": "#d3dce6",
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
