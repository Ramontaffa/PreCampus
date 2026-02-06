import { useEffect, useState } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { Card } from "../components_temp/Cards/Card";
import Footer from "../components_temp/common/Footer";

interface Evento {
  id: number;
  title: string;
  imageUrl: string;
  isFavorite: boolean;
}

export default function PainelEventos() {
  const { setTitle } = useHeader();

  const [eventos, setEventos] = useState<Evento[]>([
    {
      id: 1,
      title: "Evento 1",
      imageUrl: "https://placehold.co/300x150",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Evento 2",
      imageUrl: "https://placehold.co/300x150",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Evento 3",
      imageUrl: "https://placehold.co/300x150",
      isFavorite: false,
    },
    {
      id: 4,
      title: "Evento 4",
      imageUrl: "https://placehold.co/300x150",
      isFavorite: false,
    },
    {
      id: 5,
      title: "Evento 5",
      imageUrl: "https://placehold.co/300x150",
      isFavorite: false,
    },
  ]);

  useEffect(() => {
    setTitle("Painel de Eventos");
  }, []);

  const toggleFavorite = (id: number) => {
    setEventos((prev) =>
      prev.map((evento) =>
        evento.id === id
          ? { ...evento, isFavorite: !evento.isFavorite }
          : evento
      )
    );
  };

  return (
    <>
    <div className="mx-auto grid p-10 max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {eventos.map((evento) => (
        <Card
          key={evento.id}
          title={evento.title}
          imageUrl={evento.imageUrl}
          isFavorite={evento.isFavorite}
          onToggleFavorite={() => toggleFavorite(evento.id)}
          variant="aluno"
        />
      ))}
    </div>
    <Footer/>
    </>
  );
}
