/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#BC8A4D",
                    secondary: "#282A36",
                    accent: "#1fb2a6",
                    neutral: "#2a323c",
                    "base-100": "#10121E",
                    info: "#CACACE",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                },
            },
        ],
    },
};
