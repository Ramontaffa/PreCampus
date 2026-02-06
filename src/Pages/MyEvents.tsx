import { CalendarDays, MapPin, CheckCircle, Heart } from "lucide-react";
import { useHeader } from "../contexts/HeaderContext";
import { useEffect } from "react";
import Footer from "../components_temp/common/Footer";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  confirmed: boolean;
  favorited: boolean;
}

const eventsDefault: Event[] = [
  {
    id: 1,
    title: "Evento 1",
    date: "07/10/2026",
    location: "São Paulo, SP",
    confirmed: true,
    favorited: true,
  },
  {
    id: 2,
    title: "Evento 2",
    date: "15/10/2026",
    location: "Rio de Janeiro, RJ",
    confirmed: true,
    favorited: false,
  },
  {
    id: 3,
    title: "Evento 3",
    date: "09/06/2026",
    location: "Recife, PE",
    confirmed: false,
    favorited: true,
  },
  {
    id: 4,
    title: "Evento 4",
    date: "15/11/2026",
    location: "Jaboatão dos Guararapes, PE",
    confirmed: false,
    favorited: true,
  },
];

const MyConfirmedEvents = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Meus Eventos");
  }, [setTitle]);

  return (
    <>
    <div className="bg-slate-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-slate-200 rounded-xl shadow-md p-8">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h1 className="text-center text-xl font-semibold text-blue-900">
            Meus Eventos
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-wrap justify-center gap-3">
          {["Hoje", "Esta Semana", "Este Mês", "Todos"].map((filter) => (
            <button
              key={filter}
              type="button"
              className="px-4 py-1.5 rounded-full border border-blue-400 text-blue-600 text-sm hover:bg-blue-50 transition cursor-pointer"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-slate-700">
            Filtrar por status
          </span>

          <select
            className="w-72 px-3 py-2 rounded-md border border-blue-300 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            defaultValue="Todos"
          >
            <option>Todos</option>
            <option>Confirmados</option>
            <option>Favoritados</option>
            <option>Favoritados e Confirmados</option>
          </select>
        </div>

        {eventsDefault.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow p-6 flex justify-between mt-2 items-start gap-4"
          >
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-blue-900">
                {event.title}
              </h2>

              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <CalendarDays className="w-4 h-4" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-1.5 rounded-md border border-blue-500 text-blue-600 text-sm hover:bg-blue-50 transition cursor-pointer"
                >
                  Ver Detalhes
                </button>

                {event.confirmed ? (
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-md border border-red-400 text-red-500 text-sm hover:bg-red-50 transition cursor-pointer"
                  >
                    Cancelar Presença
                  </button>
                ) : event.favorited ? (
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-md border border-green-500 text-green-600 text-sm hover:bg-green-50 transition cursor-pointer"
                  >
                    Garantir Presença
                  </button>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end pt-1">
              {event.favorited && (
                <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                  Evento Favoritado
                </div>
              )}

              {event.confirmed && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle className="w-5 h-5" />
                  Presença Confirmada
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MyConfirmedEvents;
