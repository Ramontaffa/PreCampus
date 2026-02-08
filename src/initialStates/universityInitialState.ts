import type { UniversityFormState } from "../types/UniversityFormState";

export const universityInitialState: UniversityFormState = {
  corporateName: "",
  cnpj: "",
  email: "",
  password: "",
  phone: "",

  description: "",

  courses: [
    {
      name: "",
      description: "",
    },
  ],

  website: "",

  socialLinks: [
    {
      name: "",
      url: "",
    },
  ],

  address: {
    street: "",
    number: "",
    city: "",
    state: "",
    cep: "",
  },
};
