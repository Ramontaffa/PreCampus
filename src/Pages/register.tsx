import axios from "axios";
import { useState } from "react";

import type { StudentFormState } from "../types/StudentFormState";
import type { SchoolFormState } from "../types/SchoolFormState";
import type { UniversityFormState } from "../types/UniversityFormState";
import type { RegisterType } from "../types/RegisterType";

import RegisterHeader from "../components_temp/layouts/Register/RegisterHeader";
import RegisterTypeSelector from "../components_temp/layouts/Register/RegisterTypeSelector";
import StudentRegisterForm from "../components_temp/layouts/Register/StudentRegisterForm";
import SchoolRegisterForm from "../components_temp/layouts/Register/SchoolRegisterForm";
import UniversityRegisterForm from "../components_temp/layouts/Register/UniversityRegisterForm";
import RegisterSubmitButton from "../components_temp/layouts/Register/RegisterSubmitButton";
import AuthLayout from "../components_temp/layouts/Auth/AuthLayout";
import { studentInitialState } from "../initialStates/studentInitialState";
import { schoolInitialState } from "../initialStates/schoolInitialState";
import { universityInitialState } from "../initialStates/universityInitialState";

function normalizeStudentPayload(form: StudentFormState) {
  return {
    ...form,

    interestedCourses: form.interestedCourses.filter(Boolean),

    interestedUniversities: form.interestedUniversities.filter(Boolean),

    guardian: {
      ...form.guardian,

      otherRelationship:
        form.guardian.relationship === "Outro"
          ? form.guardian.otherRelationship
          : undefined,
    },
  };
}

function normalizeSchoolPayload(form: SchoolFormState) {
  return {
    ...form,
  };
}

function normalizeUniversityPayload(form: UniversityFormState) {
  return {
    ...form,

    courses: form.courses.filter((c) => c.name && c.description),

    socialLinks: form.socialLinks.filter((s) => s.name && s.url),

    website: form.website || undefined,
  };
}

export default function Register() {
  const [type, setType] = useState<RegisterType>("student");

  const [studentForm, setStudentForm] =
    useState<StudentFormState>(studentInitialState);

  const [schoolForm, setSchoolForm] =
    useState<SchoolFormState>(schoolInitialState);

  const [universityForm, setUniversityForm] = useState<UniversityFormState>(
    universityInitialState,
  );

  function handleChangeType(newType: RegisterType) {
    setType(newType);

    if (newType === "student") {
      setStudentForm(studentInitialState);
    }

    if (newType === "school") {
      setSchoolForm(schoolInitialState);
    }

    if (newType === "university") {
      setUniversityForm(universityInitialState);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      // if (type === "student") {
      //   const payload = normalizeStudentPayload(studentForm);

      //   await axios.post("/students/register", payload);

      //   alert("Aluno cadastrado com sucesso!");
      // }

      // if (type === "school") {
      //   const payload = normalizeSchoolPayload(schoolForm);

      //   await axios.post("/schools/register", payload);

      //   alert("Escola cadastrada com sucesso!");
      // }

      // if (type === "university") {
      //   const payload = normalizeUniversityPayload(universityForm);

      //   console.log(payload);

      //   await axios.post("/universities/register", payload);

      //   alert("Universidade cadastrada com sucesso!");
      // }
      if (type === "student") {
        const payload = normalizeStudentPayload(studentForm);

        await axios.post("/students/register", payload);

        alert("Aluno cadastrado com sucesso!");
        setStudentForm(studentInitialState);
      }

      if (type === "school") {
        const payload = normalizeSchoolPayload(schoolForm);

        await axios.post("/schools/register", payload);

        alert("Escola cadastrada com sucesso!");
        setSchoolForm(schoolInitialState);
      }

      if (type === "university") {
        const payload = normalizeUniversityPayload(universityForm);

        await axios.post("/universities/register", payload);

        alert("Universidade cadastrada com sucesso!");
        setUniversityForm(universityInitialState);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar cadastro");
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-lg px-6 py-10">
        <RegisterHeader />

        <form onSubmit={handleSubmit} className="space-y-5">
          <RegisterTypeSelector value={type} onChange={handleChangeType} />

          {type === "student" && (
            <StudentRegisterForm form={studentForm} setForm={setStudentForm} />
          )}
          {type === "school" && (
            <SchoolRegisterForm form={schoolForm} setForm={setSchoolForm} />
          )}
          {type === "university" && (
            <UniversityRegisterForm
              form={universityForm}
              setForm={setUniversityForm}
            />
          )}

          <RegisterSubmitButton />
        </form>
      </div>
    </AuthLayout>
  );
}
