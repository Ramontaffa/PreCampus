export interface UniversityCourseForm {
  name: string;
  description: string;
}

export interface SocialLinkForm {
  name: string;
  url: string;
}

export interface UniversityFormState {
  corporateName: string;
  cnpj: string;
  email: string;
  password: string;
  phone: string;

  description: string;

  courses: UniversityCourseForm[];

  website: string;

  socialLinks: SocialLinkForm[];

  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    cep: string;
  };
}
