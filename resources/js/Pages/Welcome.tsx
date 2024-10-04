import Introduction from "@/Fragments/Welcome/Introduction";
import Layout from "@/Layouts/index";
import About from "@/Fragments/Welcome/About";
import Contact from "@/Fragments/Welcome/Contact";

export default function Welcome() {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <Layout title="Junior web developer">
            <Introduction />
            <About />
            <Contact />
        </Layout>
    );
}
