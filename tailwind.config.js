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
                noFooterScreen: "calc(100vh - 16rem)",
                noNavNoFooterScreen: "calc(100vh - 20rem)",
                noSideMenu: "calc(100vw - 16rem)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                Mulish: ["Mulish", "sans-serif"],
            },
            backgroundImage: {
                intrduction: "url('/images/backgrounds/introduction.png')",
                contact: "url('/images/backgrounds/contact.png')",
                contactForm: "url('/images/backgrounds/contact-form.png')",
            },
        },
    },

    darkMode: "selector",

    plugins: [forms],
};
