import Link from "next/link";
import HomeLayout from "../../layout/HomeLayout";
import UniversitySidebar from "./components/UniversitySidebar";
import Card from "../../components/Card";

interface UniversityEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  status: "disponivel" | "inscrito" | "encerrado";
}

const mockUniversityEvents: UniversityEvent[] = [
  { id: 1, title: "Semana da Computação", date: "20/10/2024", location: "Auditório A", status: "inscrito" },
  { id: 2, title: "Workshop de Robótica", date: "25/10/2024", location: "Lab 3", status: "disponivel" },
  { id: 3, title: "Palestra de Design UI", date: "15/11/2024", location: "Sala 101", status: "encerrado" },
  { id: 4, title: "Hackathon 2024", date: "01/12/2024", location: "Campus Principal", status: "disponivel" },
];

export default function UniversityHome() {
  const availableEvents = mockUniversityEvents.filter(e => 
    e.status === "disponivel"
  );
  
  const myEvents = mockUniversityEvents.filter(e => 
    e.status === "inscrito"
  );

  const renderStatusBadge = (status: UniversityEvent["status"]) => {
    const styles = {
      disponivel: "bg-blue-50 text-blue-700 border-blue-200",
      inscrito: "bg-green-100 text-green-700 border-green-200",
      encerrado: "bg-gray-100 text-gray-500 border-gray-200",
    };

    const labels = {
      disponivel: "Inscrições Abertas",
      inscrito: "Inscrito",
      encerrado: "Encerrado",
    };

    return (
      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <HomeLayout sidebar={<UniversitySidebar />}>
      
      <div className="mb-8 animate-fade-in-down">
        <h2 className="text-3xl font-bold text-blue-600 tracking-tight">
          Portal de Eventos
        </h2>
        <p className="text-gray-500 mt-1 text-lg">
          Inscreva-se em palestras, workshops e atividades acadêmicas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Link 
          href="/universidade/atuacao-eventos" 
          className="flex items-center justify-center gap-2 bg-white border-2 border-purple-100 text-purple-600 font-bold py-4 px-6 rounded-2xl hover:border-purple-600 hover:bg-purple-50 transition-all active:scale-95"
        >
          <span>Explorar Eventos</span>
        </Link>
        
        <Link 
          href="/universidade/perfil" 
          className="flex items-center justify-center gap-2 bg-white border-2 border-purple-100 text-purple-600 font-bold py-4 px-6 rounded-2xl hover:border-purple-600 hover:bg-purple-50 transition-all active:scale-95"
        >
          <span>Minhas Inscrições</span>
        </Link>
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-6 pl-1">
          Eventos Disponíveis
          <span className="text-sm font-normal text-gray-500 ml-2 bg-gray-100 px-2 py-0.5 rounded-full">
            {availableEvents.length}
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableEvents.length > 0 ? availableEvents.map((event) => (
            <div key={event.id}>
              <Card className="p-5 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    {renderStatusBadge(event.status)}
                    <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">
                      {event.date}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">{event.location}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-2">
                  <button className="w-full py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow transition-all">
                    Inscrever-se
                  </button>
                </div>
              </Card>
            </div>
          )) : (
            <p className="text-gray-400 col-span-full italic">Não há eventos disponíveis no momento.</p>
          )}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-purple-600 flex items-center gap-2 mb-6 pl-1">
          Suas Inscrições
          <span className="text-sm font-normal text-purple-100 bg-purple-600 px-2 py-0.5 rounded-full">
            {myEvents.length}
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myEvents.length > 0 ? myEvents.map((event) => (
            <div key={event.id}>
              <Card className="p-5 h-full flex flex-col justify-between border-purple-100 hover:border-purple-300">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    {renderStatusBadge(event.status)}
                    <span className="text-xs text-gray-400 font-medium">
                      {event.date}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">{event.location}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-2 flex gap-2">
                  <button className="flex-1 py-2 text-sm font-bold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Detalhes
                  </button>
                  <button className="flex-1 py-2 text-sm font-bold text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    Cancelar
                  </button>
                </div>
              </Card>
            </div>
          )) : (
            <p className="text-gray-400 col-span-full italic">Você ainda não se inscreveu em nenhum evento.</p>
          )}
        </div>
      </section>

    </HomeLayout>
  );
}