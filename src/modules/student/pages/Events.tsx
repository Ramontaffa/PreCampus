import HomeLayout from "../../../layout/HomeLayout";
import StudentSidebar from "../components/StudentSidebar";
import Card from "../components/Card";

export default function Events() {
  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-orange-500">
          Eventos Disponíveis
        </h2>
        <p className="text-gray-500  mt-1">Inscreva-se nas palestras e workshops.</p>
      </div>

      <div className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="border border-orange-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <Card titulo="Introdução à IA" status="inscrever" imagem="/img/palestra1.jpg" />
          </div>

          <div className="border border-orange-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <Card titulo="Design Thinking Workshop" status="inscrito" imagem="/img/palestra2.jpg" />
          </div>

          <div className="border border-orange-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <Card titulo="Feira de Profissões" status="inscrito" imagem="/img/palestra3.jpg" />
          </div>

          <div className="border border-orange-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <Card titulo="Carreira em Medicina" status="saibaMais" imagem="/img/palestra4.jpg" />
          </div>

          <div className="border border-orange-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <Card titulo="Engenharia do Futuro" status="saibaMais" imagem="/img/palestra5.jpg" />
          </div>

        </div>

      </div>
    </HomeLayout>
  );
}