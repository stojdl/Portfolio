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
            screens: {
                "3xl": "1921px",
            },
            spacing: {
                noNavScreen: "calc(100vh - 4rem)",
                noFooterScreen: "calc(100vh - 20rem)",
                noNavNoFooterScreen: "calc(100vh - 24rem)",
                noSideMenu: "calc(100vw - 16rem)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                Mulish: ["Mulish", "sans-serif"],
            },
            backgroundImage: {
                introduction: "url('/images/backgrounds/introduction.png')",
                introductionXL:
                    "url('/images/backgrounds/introduction-xl.png')",
                contact: "url('/images/backgrounds/contact.png')",
                contactForm: "url('/images/backgrounds/contact-form.png')",
            },
        },
    },

    darkMode: "selector",

    plugins: [forms],
};
