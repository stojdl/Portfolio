import Show from "@/Fragments/Orders/Show";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Offers() {
    return (
        <AuthenticatedLayout title="Nabídky">
            <Show />
        </AuthenticatedLayout>
    );
}
