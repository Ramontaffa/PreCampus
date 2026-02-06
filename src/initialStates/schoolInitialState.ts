import type { SchoolFormState } from "../types/SchoolFormState";

export const schoolInitialState: SchoolFormState = {
  corporateName: "",
  cnpj: "",
  email: "",
  password: "",
  phone: "",
  address: {
    street: "",
    number: "",
    city: "",
    state: "",
    cep: "",
  },
  classes: {
    firstYear: 0,
    secondYear: 0,
    thirdYear: 0,
  },
  studentsCount: {
    firstYear: 0,
    secondYear: 0,
    thirdYear: 0,
  },
};
