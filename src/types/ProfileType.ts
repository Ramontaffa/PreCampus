export interface UniversityProfileForm {
  corporateName: string;
  email: string;
  phone: string;
  description: string;
  courses: { name: string; description: string }[];
  website: string;
  socialLinks: { name: string; url: string }[];
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    cep: string;
  };
}
