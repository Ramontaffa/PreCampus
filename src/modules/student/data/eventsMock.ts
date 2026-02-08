import { StaticImageData } from "next/image";
import EventBannerImg from "../../../assets/SchoolEventDetails.png";
import Illustration from "../../../assets/Illustration.svg";

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
  banner: string | StaticImageData;
  description: string;
  agenda: Array<{ time: string; title: string }>;
  universities: Array<{
    id: string;
    name: string;
    booth: string;
    summary: string;
    courses: string[];
    brings: string[];
    contact: string;
  }>;
}

export const studentEventsMock: StudentEvent[] = [
  {
    id: "summit-tecnologia",
    title: "Summit de Carreiras em Tecnologia",
    status: "inscrever",
    date: "21 mar 2026",
    time: "18h - 21h",
    mode: "Presencial",
    location: "Auditório Central - Campus Vila Nova",
    spots: "120 vagas",
    level: "Aberto para todos os cursos",
    certificate: "Certificado de participação (3h)",
    banner: EventBannerImg,
    description:
      "Uma imersão sobre tendências em tecnologia, trajetórias profissionais e como se posicionar para estágios e programas de trainee. Inclui Q&A ao vivo e networking entre estudantes e universidades convidadas.",
    agenda: [
      { time: "18h00", title: "Abertura e boas-vindas" },
      { time: "18h20", title: "Painel: Carreiras em IA e Dados" },
      { time: "19h10", title: "Workshop: Portfólio e projetos para estágio" },
      { time: "20h10", title: "Networking rápido com universidades" },
      { time: "20h40", title: "Encerramento e próximos passos" },
    ],
    universities: [
      {
        id: "tech-univ",
        name: "Tech University",
        booth: "B12",
        summary: "Foco em computação, IA e dados.",
        courses: ["Ciência da Computação", "Engenharia de Software", "Sistemas de Informação"],
        brings: ["Professores para Q&A", "Catálogo de bolsas para tecnologia", "Mini mentoria sobre portfólio"],
        contact: "contato@techuniv.edu",
      },
      {
        id: "inova-campus",
        name: "Inova Campus",
        booth: "B08",
        summary: "Cursos híbridos e laboratórios maker.",
        courses: ["Design de Produto", "Engenharia de Produção", "Arquitetura"],
        brings: ["Demonstração de projetos de alunos", "Bolsas parciais para workshops", "Tour virtual dos labs"],
        contact: "relacionamento@inovact.br",
      },
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
    banner: Illustration,
    description:
      "Construa soluções centradas no usuário com exercícios práticos e feedback de especialistas. Ideal para quem quer fortalecer portfólio e soft skills.",
    agenda: [
      { time: "17h00", title: "Introdução e briefing" },
      { time: "17h30", title: "Pesquisa rápida e definição" },
      { time: "18h15", title: "Ideação e priorização" },
      { time: "19h00", title: "Prototipagem expressa" },
      { time: "19h45", title: "Apresentações e feedback" },
    ],
    universities: [
      {
        id: "design-hub",
        name: "Design Hub University",
        booth: "C03",
        summary: "Escola referência em UX e Service Design.",
        courses: ["Design", "UX/UI", "Service Design"],
        brings: ["Avaliação rápida de portfolio", "Vagas de monitoria em estúdio", "Calendário de bootcamps"],
        contact: "ux@designhub.edu",
      },
    ],
  },
  {
    id: "feira-profissoes",
    title: "Feira de Profissões",
    status: "saibaMais",
    date: "26 mar 2026",
    time: "09h - 15h",
    mode: "Presencial",
    location: "Centro de Convenções",
    spots: "200 vagas presenciais",
    level: "Para quem está decidindo curso",
    certificate: "Credencial de participação",
    banner: EventBannerImg,
    description:
      "Converse com universidades, descubra cursos e tire dúvidas sobre carreira. Espaços temáticos, talks rápidos e plantão de orientação.",
    agenda: [
      { time: "09h00", title: "Recepção e credenciamento" },
      { time: "10h00", title: "Talk: Tendências do mercado" },
      { time: "11h00", title: "Painel com universidades" },
      { time: "13h00", title: "Mentorias relâmpago" },
      { time: "14h30", title: "Encerramento" },
    ],
    universities: [
      {
        id: "saude-mais",
        name: "Saude Mais Universidade",
        booth: "P05",
        summary: "Faculdade especializada em saúde e bem-estar.",
        courses: ["Enfermagem", "Fisioterapia", "Nutrição"],
        brings: ["Simulação de ambulatório", "Programas de bolsas para enfermagem", "Plantão de dúvidas sobre residência"],
        contact: "relacionamento@saudemais.edu",
      },
      {
        id: "politech",
        name: "PoliTech",
        booth: "P07",
        summary: "Engenharias com ênfase em inovação.",
        courses: ["Engenharia Civil", "Engenharia Mecatrônica", "Engenharia Elétrica"],
        brings: ["Demonstração de robótica", "Editais de iniciação científica", "Mentoria sobre vestibular"],
        contact: "contato@politech.edu",
      },
    ],
  },
  {
    id: "engenharia-futuro",
    title: "Engenharia do Futuro",
    status: "saibaMais",
    date: "30 mar 2026",
    time: "10h - 12h",
    mode: "Presencial",
    location: "Auditório Principal - Torre Norte",
    spots: "150 vagas",
    level: "Foco em tecnologia e infraestrutura",
    certificate: "Certificado de participação (2h)",
    banner: Illustration,
    description:
      "Descubra como novas tecnologias estão transformando engenharia civil, elétrica e de software. Inclui cases de projetos e trilhas de estudo sugeridas.",
    agenda: [
      { time: "10h00", title: "Panorama das engenharias" },
      { time: "10h30", title: "Case aplicado e discussões" },
      { time: "11h15", title: "Trilhas e certificados" },
      { time: "11h45", title: "Q&A" },
    ],
    universities: [
      {
        id: "eng-labs",
        name: "Engineering Labs University",
        booth: "H02",
        summary: "Infraestrutura de labs e convênios internacionais.",
        courses: ["Engenharia de Materiais", "Engenharia de Software", "Engenharia de Energia"],
        brings: ["Mostruário de projetos de campo", "Programas de dupla diplomação", "Calendário de visitas técnicas"],
        contact: "admissions@englabs.edu",
      },
    ],
  },
  {
    id: "medicina-carreira",
    title: "Carreira em Medicina",
    status: "saibaMais",
    date: "27 mar 2026",
    time: "18h - 20h",
    mode: "Presencial",
    location: "Centro Clínico Universitário - Sala 3",
    spots: "90 vagas",
    level: "Indicada para saúde",
    certificate: "Certificado de participação (2h)",
    banner: EventBannerImg,
    description:
      "Entenda caminhos de especialização, rotina hospitalar e preparação para provas de residência com médicos convidados e espaço para perguntas.",
    agenda: [
      { time: "18h00", title: "Contexto e panorama da saúde" },
      { time: "18h30", title: "Especializações e rotinas" },
      { time: "19h15", title: "Preparação para residência" },
      { time: "19h45", title: "Q&A" },
    ],
    universities: [
      {
        id: "med-campus",
        name: "Med Campus",
        booth: "S01",
        summary: "Escola de medicina com residência própria.",
        courses: ["Medicina", "Biomedicina", "Enfermagem"],
        brings: ["Plantão de orientação de residência", "Programas de bolsas parciais", "Apresentação de simuladores"],
        contact: "medicina@medcampus.edu",
      },
    ],
  },
];

export function getStudentEventById(id: string) {
  return studentEventsMock.find((event) => event.id === id);
}
