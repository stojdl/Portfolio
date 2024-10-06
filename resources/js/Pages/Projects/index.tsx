import LMS from "@/Fragments/Projects/LMS";
import Others from "@/Fragments/Projects/Others";
import Overview from "@/Fragments/Projects/Overview";
import PdgmInternal from "@/Fragments/Projects/PdgmInternal";
import Sunizer from "@/Fragments/Projects/Sunizer";
import Layout from "@/Layouts";

export default function Projects() {
    return (
        <Layout title="Projekty">
            <Overview />
            <Sunizer />
            <PdgmInternal />
            <LMS />
            <Others />
        </Layout>
    );
}
