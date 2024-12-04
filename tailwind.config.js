/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'regular': ['PaperlogyFont-Regular'],
                'semibold': ['PaperlogyFont-Semibold'],
                'bold': ['PaperlogyFont-Bold'],
            },
            colors: {
                'main-heavy-dark':"#0A0C23",
                'main-dark':"#121E58",
                'main-semi-dark':"#1C5ACB",
                'main': "#388ED8",
                'main-semi-light': "#9FE4EA",
                'main-light': "#D7FDFC",
            },
        },
    },
    plugins: [
        function ({ addBase, theme }) {
            addBase({
                ':root': {
                    '--main-heavy-dark': theme('colors.main-heavy-dark'),
                    '--main-dark': theme('colors.main-dark'),
                    '--main-semi-dark': theme('colors.main-semi-dark'),
                    '--main': theme('colors.main'),
                    '--main-semi-light': theme('colors.main-semi-light'),
                    '--main-light': theme('colors.main-light'),
                },
            });
        },
    ],
}