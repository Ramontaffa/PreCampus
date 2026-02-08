"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

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
      href="/event"
      className="h-fit w-64 overflow-hidden rounded-xl bg-white shadow-md"
    >
      <Image
        src={imageUrl}
        alt={title}
        className="h-32 w-full object-cover"
        width={256}
        height={128}
        unoptimized
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
