/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                128: "71.6083916vh",
                perc: "20%",
            },
            fontSize: {
                "sm": ["1.95804vh", "2.797202vh"],
                "base":["2.23776vh","3.35664vh"],
                "lg": ["2.5174vh", "3.91608vh"],
                "xl": ["2.7972vh",  "3.9160vh"],
                "2xl": ["3.35664vh", "4.4755vh"],
                "5xl": ["6.71328vh", "1"],
                "7xl": ["10.0699vh", "1"]
            }
        },
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
