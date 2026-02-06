import type { Address } from "./AddressType";

export type Role = "student" | "school" | "university" | "admin";

export interface Course {
  name: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
export interface BaseUser {
  id: string;
  email: string;
  role: Role;
}

export interface StudentUser extends BaseUser {
  role: "student";
  fullName: string;
  phone: string;
  birthDate: string;
  monthlyIncome: number;
  interestedCourses: string[];
  interestedUniversities: string[];
  address: Address;
  guardian?: {
    fullName: string;
    cpf: string;
    relationship: string;
    email: string;
    otherRelationship?: string;
    address: Address;
  };
}

/* ===================== SCHOOL ===================== */
export interface SchoolUser extends BaseUser {
  role: "school";
  corporateName: string;
  phone: string;
  address: Address;

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
}

/* ===================== UNIVERSITY ===================== */
export interface UniversityUser extends BaseUser {
  role: "university";
  corporateName: string;
  phone: string;
  description: string;
  courses: Course[];
  website?: string;
  socialLinks: SocialLink[];
  address: Address;
}

export type User = StudentUser | SchoolUser | UniversityUser;
