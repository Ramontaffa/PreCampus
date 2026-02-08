import HomeLayout from "../../layout/HomeLayout";
import StudentSidebar from "./components/StudentSidebar";
import NextEventBanner from "./components/NextEventBanner";
import Card from "./components/Card";

interface Evento {
  id: number;
  title: string;
  status: "inscrever" | "inscrito" | "saibaMais";
}

const mockEvents: Evento[] = [
  { id: 1, title: "Palestra de Tecnologia", status: "inscrever" },
  { id: 2, title: "Workshop de Design", status: "inscrito" },
  { id: 3, title: "Feira de Profissões", status: "inscrever" },
];

export default function StudentHome() {
  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      
      <div className="mb-8 animate-fade-in-down">
        <h2 className="text-3xl font-bold text-orange-500 tracking-tight">
          Bem-vindo, Aluno(a)!
        </h2>
        <p className="text-gray-500 mt-1 text-lg">
          Confira o que está rolando na sua universidade.
        </p>
      </div>

      <NextEventBanner 
        title="Palestra sobre o curso X" 
        img="/img/evento.jpg" 
      />

      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2">
            Outros Eventos
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockEvents.map((event) => (
             <div key={event.id} className="h-full">
                <Card 
                  titulo={event.title} 
                  status={event.status} 
                 />
             </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border-2 border-orange-500 text-blue-600 font-bold px-10 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 uppercase text-sm tracking-wide cursor-pointer active:scale-95">
            Veja Mais
          </button>
        </div>
      </section>

    </HomeLayout>
  );
}