import Navbar from "@/Components/Nav/Navbar";
import { AppContext } from "@/Contexts/App";
import Footer from "@/Fragments/Footer";
import { LayoutProps } from "@/types/Layout";
import { Head } from "@inertiajs/react";
import { useContext } from "react";

const Layout = (props: LayoutProps) => {
    const { children, title } = props;

    const { darkmode } = useContext(AppContext);

    return (
        <div
            className={`${darkmode || "dark"} bg-slate-100 dark:bg-slate-800 dark:text-neutral-200`}
        >
            <Head title={title} />

            <header className="">
                <Navbar />
            </header>

            <main className="min-h-noNavNoFooterScreen">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
