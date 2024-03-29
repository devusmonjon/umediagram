/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            primary: "#877EFF",
            secondary: "#FFB620",
            dark: {
                1: "#000000",
                2: "#09090A",
                3: "#101012",
                4: "#1F1F22",
            },
            light: {
                1: "#FFFFFF",
                2: "#EFEFEF",
                3: "#7878A3",
                4: "#5C5C7B",
            },
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        fontWeight: {
            bold: 700,
            semibold: 600,
            medium: 500,
            regular: 400,
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
};
