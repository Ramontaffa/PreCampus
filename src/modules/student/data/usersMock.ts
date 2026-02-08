export interface StudentUserMock {
  id: string;
  name: string;
  email: string;
  phone: string;
  interests: string[];
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
