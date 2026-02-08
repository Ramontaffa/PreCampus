import type { StudentFormState } from "../types/StudentFormState";

export const studentInitialState: StudentFormState = {
  fullName: "",
  email: "",
  password: "",

  birthDate: "",
  phone: "",

  address: {
    street: "",
    number: "",
    city: "",
    state: "",
    cep: "",
  },

  monthlyIncome: 0,

  guardian: {
    fullName: "",
    relationship: "",
    otherRelationship: "",
    cpf: "",
    email: "",
    address: {
      street: "",
      number: "",
      city: "",
      state: "",
      cep: "",
    },
  },

  interestedCourses: ["", "", ""],
  interestedUniversities: ["", "", ""],
};
