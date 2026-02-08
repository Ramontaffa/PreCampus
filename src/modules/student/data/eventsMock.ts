export type StudentEventStatus = "inscrever" | "inscrito" | "saibaMais";

export interface StudentEvent {
  id: string;
  title: string;
  status: StudentEventStatus;
  date: string;
  time: string;
  mode: string;
  location: string;
  spots: string;
  level: string;
  certificate: string;
  banner: string;
  description: string;
  agenda: Array<{ time: string; title: string }>;
}

export const studentEventsMock: StudentEvent[] = [
  {
    id: "summit-tecnologia",
    title: "Summit de Carreiras em Tecnologia",
    status: "inscrever",
    date: "21 mar 2026",
    time: "18h - 21h",
    mode: "On-line ao vivo",
    location: "Plataforma PreCampus (link após inscrição)",
    spots: "120 vagas",
    level: "Aberto para todos os cursos",
    certificate: "Certificado de participação (3h)",
    banner: "/img/palestra1.jpg",
    description:
      "Uma imersão sobre tendências em tecnologia, trajetórias profissionais e como se posicionar para estágios e programas de trainee. Inclui Q&A ao vivo e networking entre estudantes e universidades convidadas.",
    agenda: [
      { time: "18h00", title: "Abertura e boas-vindas" },
      { time: "18h20", title: "Painel: Carreiras em IA e Dados" },
      { time: "19h10", title: "Workshop: Portfólio e projetos para estágio" },
      { time: "20h10", title: "Networking rápido com universidades" },
      { time: "20h40", title: "Encerramento e próximos passos" },
    ],
  },
  {
    id: "design-thinking",
    title: "Design Thinking Workshop",
    status: "inscrito",
    date: "18 mar 2026",
    time: "17h - 20h",
    mode: "Presencial",
    location: "Auditório Central - Bloco B",
    spots: "60 vagas",
    level: "Para interessados em inovação",
    certificate: "Certificado de participação (3h)",
    banner: "/img/palestra2.jpg",
    description:
      "Construa soluções centradas no usuário com exercícios práticos e feedback de especialistas. Ideal para quem quer fortalecer portfólio e soft skills.",
    agenda: [
      { time: "17h00", title: "Introdução e briefing" },
      { time: "17h30", title: "Pesquisa rápida e definição" },
      { time: "18h15", title: "Ideação e priorização" },
      { time: "19h00", title: "Prototipagem expressa" },
      { time: "19h45", title: "Apresentações e feedback" },
    ],
  },
  {
    id: "feira-profissoes",
    title: "Feira de Profissões",
    status: "saibaMais",
    date: "26 mar 2026",
    time: "09h - 15h",
    mode: "Híbrido",
    location: "Centro de Convenções + Streaming",
    spots: "200 vagas presenciais",
    level: "Para quem está decidindo curso",
    certificate: "Credencial de participação",
    banner: "/img/palestra3.jpg",
    description:
      "Converse com universidades, descubra cursos e tire dúvidas sobre carreira. Espaços temáticos, talks rápidos e plantão de orientação.",
    agenda: [
      { time: "09h00", title: "Recepção e credenciamento" },
      { time: "10h00", title: "Talk: Tendências do mercado" },
      { time: "11h00", title: "Painel com universidades" },
      { time: "13h00", title: "Mentorias relâmpago" },
      { time: "14h30", title: "Encerramento" },
    ],
  },
  {
    id: "engenharia-futuro",
    title: "Engenharia do Futuro",
    status: "saibaMais",
    date: "30 mar 2026",
    time: "10h - 12h",
    mode: "On-line",
    location: "Sala virtual (link após inscrição)",
    spots: "150 vagas",
    level: "Foco em tecnologia e infraestrutura",
    certificate: "Certificado de participação (2h)",
    banner: "/img/palestra5.jpg",
    description:
      "Descubra como novas tecnologias estão transformando engenharia civil, elétrica e de software. Inclui cases de projetos e trilhas de estudo sugeridas.",
    agenda: [
      { time: "10h00", title: "Panorama das engenharias" },
      { time: "10h30", title: "Case aplicado e discussões" },
      { time: "11h15", title: "Trilhas e certificados" },
      { time: "11h45", title: "Q&A" },
    ],
  },
  {
    id: "medicina-carreira",
    title: "Carreira em Medicina",
    status: "saibaMais",
    date: "27 mar 2026",
    time: "18h - 20h",
    mode: "On-line",
    location: "Sala virtual (link após inscrição)",
    spots: "90 vagas",
    level: "Indicada para saúde",
    certificate: "Certificado de participação (2h)",
    banner: "/img/palestra4.jpg",
    description:
      "Entenda caminhos de especialização, rotina hospitalar e preparação para provas de residência com médicos convidados e espaço para perguntas.",
    agenda: [
      { time: "18h00", title: "Contexto e panorama da saúde" },
      { time: "18h30", title: "Especializações e rotinas" },
      { time: "19h15", title: "Preparação para residência" },
      { time: "19h45", title: "Q&A" },
    ],
  },
];

export function getStudentEventById(id: string) {
  return studentEventsMock.find((event) => event.id === id);
}
