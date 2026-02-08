import type { MonthlyIncome } from "./MonthlyIncome";

export type StudentFormState = {
  fullName: string;
  email: string;
  password: string;

  birthDate: string;
  phone: string;
  monthlyIncome: MonthlyIncome;

  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    cep: string;
  };

  guardian: {
    fullName: string;
    relationship: string;
    otherRelationship: string;
    cpf: string;
    email: string;

    address: {
      street: string;
      number: string;
      city: string;
      state: string;
      cep: string;
    };
  };

  interestedCourses: string[];
  interestedUniversities: string[];
};
