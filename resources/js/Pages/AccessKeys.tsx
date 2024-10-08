import Divider from "@/Components/Divider";
import Create from "@/Fragments/AccessKeys/Create";
import Show from "@/Fragments/AccessKeys/Show";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AccessKeys() {
    return (
        <AuthenticatedLayout title="Přístupové klíče">
            <Create />
            <Divider />
            <Show />
        </AuthenticatedLayout>
    );
}
