import AuthenticatedNavbar from "@/Components/Nav/AuthenticatedNavbar";
import Navbar from "@/Components/Nav/Navbar";
import { AppContext } from "@/Contexts/App";
import Footer from "@/Fragments/Footer";
import { LayoutProps } from "@/types/Layout";
import { Head } from "@inertiajs/react";
import { useContext } from "react";

const AuthenticatedLayout = (props: LayoutProps) => {
    const { children, title } = props;

    const { darkmode } = useContext(AppContext);

    return (
        <div
            className={`relative ${darkmode || "dark"} bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 dark:text-neutral-200`}
        >
            <Head title={title} />

            <header>
                <AuthenticatedNavbar />
            </header>

            <main className="mt-16 relative min-h-noNavScreen md:mt-0 md:min-h-screen md:w-noSideMenu md:ml-64">
                {children}
            </main>
        </div>
    );
};

export default AuthenticatedLayout;
