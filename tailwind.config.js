import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            spacing: {
                noNavScreen: "calc(100vh - 4rem)",
                noNavNoFooterScreen: "calc(100vh - 20rem)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                intrduction: "url('/images/backgrounds/introduction.png')",
                contact: "url('/images/backgrounds/contact.png')",
            },
        },
    },

    darkMode: "selector",

    plugins: [forms],
};
