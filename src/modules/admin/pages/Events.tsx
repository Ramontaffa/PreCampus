import HomeLayout from "@/layout/HomeLayout";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminEvents() {
	return (
		<HomeLayout sidebar={<AdminSidebar />}>
			<div className="p-6 bg-white rounded-2xl border border-red-100 shadow-sm">
				<h1 className="text-2xl font-bold text-red-700 mb-2">Validação de Eventos</h1>
				<p className="text-gray-600">Esta área está em construção. Adicione a lógica de validação quando as regras forem definidas.</p>
			</div>
		</HomeLayout>
	);
}
