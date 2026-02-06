import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type CardVariant = "aluno" | "universidade" | "escola";

interface CardProps {
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  variant?: CardVariant;
}

export function Card({
  title,
  imageUrl,
  isFavorite,
  onToggleFavorite,
  variant = "universidade",
}: CardProps) {
  const heartColor = variant === "aluno" ? "#D84E2F" : "#006607";

  return (
    <Link
      to={"/event"}
      className="h-fit w-64 overflow-hidden rounded-xl bg-white shadow-md"
    >
      <img
        src={imageUrl}
        alt="Imagem Evento"
        className="h-32 w-full object-cover"
      />
      <div className="flex items-center justify-between p-3">
        <h3 className="text-sm font-semibold">{title}</h3>

        <button onClick={(e) => {
            e.preventDefault(); 
            e.stopPropagation();  
            onToggleFavorite();
          }}
        >
          <Heart
            size={25}
            style={{
              color: heartColor,
              fill: isFavorite ? heartColor : "transparent",
            }}
          />
        </button>
      </div>
    </Link>
  );
}
