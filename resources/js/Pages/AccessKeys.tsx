import Create from "@/Fragments/AccessKeys/Create";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AccessKeys() {
    return (
        <AuthenticatedLayout title="Přístupové klíče">
            <Create />
        </AuthenticatedLayout>
    );
}
