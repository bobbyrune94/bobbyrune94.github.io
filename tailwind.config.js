/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            varuna: [
                'Varuna', "sans-serif"
            ]
        },
        colors: {
            "black": "#141414",
            "white": "#FEFEFE",
            "blue": "#17183B",
            "magenta": "##A11692",
        }
    },
    darkMode: 'class',
    plugins: [],
}