"use client";

import { useState } from "react";
import { Input } from "../../input";
import type { StudentFormState } from "../../../types/StudentFormState";
import { AddressSection } from "../../forms/AddressSection";
import { RelationshipSelect } from "../../forms/student/RelationshipSelect";
import { MonthlyIncomeSelect } from "../../forms/student/MonthlyIncomeSelect";
import { InterestsFields } from "../../forms/student/InterestsFields";

type StudentRegisterFormProps = {
  form: StudentFormState;
  setForm: React.Dispatch<React.SetStateAction<StudentFormState>>;
};

const StudentRegisterForm = ({ form, setForm }: StudentRegisterFormProps) => {
  const [useSameAddress, setUseSameAddress] = useState(false);

  return (
    <>
      {/*---------- DADOS ALUNO ----------*/}
      <Input
        label="Nome completo"
        value={form.fullName}
        onChange={(v) => setForm((prev) => ({ ...prev, fullName: v }))}
      />

      <Input
        label="Email"
        value={form.email}
        onChange={(v) => setForm((prev) => ({ ...prev, email: v }))}
      />

      <Input
        type="password"
        label="Senha"
        value={form.password}
        onChange={(v) => setForm((prev) => ({ ...prev, password: v }))}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Telefone"
          value={form.phone}
          onChange={(v) => setForm((prev) => ({ ...prev, phone: v }))}
        />

        <Input
          type="date"
          label="Data de nascimento"
          value={form.birthDate}
          onChange={(v) => setForm((prev) => ({ ...prev, birthDate: v }))}
        />
      </div>

      <MonthlyIncomeSelect
        value={form.monthlyIncome}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, monthlyIncome: value }))
        }
      />

      {/*---------- ENDEREÇO ALUNO ----------*/}
      <AddressSection
        title="Endereço"
        address={form.address}
        onChange={(address) => setForm((prev) => ({ ...prev, address }))}
      />

      {/*---------- DADOS RESPONSÁVEL ---------- */}
      <div className="bg-admin h-px w-full"></div>

      <p className="text-sm font-medium text-zinc-700">Dados do responsável</p>

      <Input
        label="Nome completo do responsável"
        value={form.guardian.fullName}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, fullName: v },
          }))
        }
      />

      <RelationshipSelect
        value={form.guardian.relationship}
        otherValue={form.guardian.otherRelationship}
        onChange={(relationship, other) =>
          setForm((prev) => ({
            ...prev,
            guardian: {
              ...prev.guardian,
              relationship,
              otherRelationship: other ?? "",
            },
          }))
        }
      />

      <Input
        label="CPF"
        value={form.guardian.cpf}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, cpf: v },
          }))
        }
      />

      <Input
        label="Email do responsável"
        value={form.guardian.email}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, email: v },
          }))
        }
      />

      <label className="flex items-center gap-2 text-sm text-zinc-700">
        <input
          type="checkbox"
          checked={useSameAddress}
          onChange={(e) => {
            const checked = e.target.checked;
            setUseSameAddress(checked);

            if (checked) {
              setForm((prev) => ({
                ...prev,
                guardian: {
                  ...prev.guardian,
                  address: { ...prev.address },
                },
              }));
            }
          }}
        />
        Usar o mesmo endereço do aluno
      </label>

      <AddressSection
        title="Endereço do responsável"
        address={form.guardian.address}
        disabled={useSameAddress}
        onChange={(address) =>
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, address },
          }))
        }
      />

      <div className="bg-admin h-px w-full"></div>

      <InterestsFields
        title="Cursos de interesse (até 3)"
        values={form.interestedCourses}
        onChange={(values) =>
          setForm((prev) => ({ ...prev, interestedCourses: values }))
        }
      />

      <InterestsFields
        title="Universidades de interesse"
        values={form.interestedUniversities}
        onChange={(values) =>
          setForm((prev) => ({
            ...prev,
            interestedUniversities: values,
          }))
        }
      />
    </>
  );
};

export default StudentRegisterForm;
