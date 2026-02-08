export interface StudentUserMock {
  id: string;
  name: string;
  email: string;
  phone: string;
  interests: string[];
  birthDate: string;
  universitiesOfInterest: string[];
  coursesOfInterest: string[];
  guardianName: string;
  guardianEmail: string;
  guardianRelationship: string;
  guardianCpf: string;
  guardianIncome: string;
  guardianAddress: string;
}

export interface SchoolUserMock {
  id: string;
  name: string;
  role: string;
  email: string;
}

export interface UniversityUserMock {
  id: string;
  name: string;
  contact: string;
  campus: string;
}

export const currentStudentMock: StudentUserMock = {
  id: "aluno-001",
  name: "Ana Ribeiro",
  email: "ana.ribeiro@precampus.edu",
  phone: "(11) 98888-1234",
  interests: ["Tecnologia", "Design", "Engenharia"],
  birthDate: "2006-03-15",
  universitiesOfInterest: ["Tech University", "Uni Digital", "Impacta"],
  coursesOfInterest: ["Engenharia de Software", "Design de Produto", "Sistemas de Informação"],
  guardianName: "Marcos Ribeiro",
  guardianEmail: "marcos.ribeiro@email.com",
  guardianRelationship: "Pai",
  guardianCpf: "123.456.789-00",
  guardianIncome: "R$ 8.500,00",
  guardianAddress: "Rua das Flores, 120 - Vila Nova, São Paulo/SP",
};

export const currentSchoolMock: SchoolUserMock = {
  id: "school-001",
  name: "Colégio Horizonte",
  role: "Coordenador(a)",
  email: "coordenacao@horizonte.edu",
};

export const currentUniversityMock: UniversityUserMock = {
  id: "univ-001",
  name: "Tech University",
  contact: "relacionamento@techuniversity.edu",
  campus: "São Paulo",
};
