export type SchoolFormState = {
  corporateName: string;
  cnpj: string;
  email: string;
  password: string;
  phone: string;

  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    cep: string;
  };
  classes: {
    firstYear: number;
    secondYear: number;
    thirdYear: number;
  };

  studentsCount: {
    firstYear: number;
    secondYear: number;
    thirdYear: number;
  };
};
