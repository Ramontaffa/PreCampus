import { useMemo } from "react";
import { Input } from "../../../input";
import ProfileField from "../ProfileField";
import ProfileSection from "../ProfileSection";
import { MonthlyIncomeSelect } from "../../../forms/student/MonthlyIncomeSelect";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import { useAuth } from "../../../../contexts/AuthContext";
import type { StudentUser } from "../../../../types/User";
import type { MonthlyIncome } from "../../../../types/MonthlyIncome";

type Props = {
  user: StudentUser;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  monthlyIncome: MonthlyIncome;
};

export default function StudentProfileMainSection({ user }: Props) {
  const { updateUser } = useAuth();

  const initialData = useMemo<FormState>(
    () => ({
      fullName: user.fullName ?? "",
      email: user.email ?? "",
      phone: user.phone ?? "",
      birthDate: user.birthDate ?? "",
      monthlyIncome: (user.monthlyIncome ?? 0) as MonthlyIncome,
    }),
    [user],
  );

  const section = useEditableSection(initialData);

  async function handleSave(data: FormState) {
    await updateUser({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      birthDate: data.birthDate,
      monthlyIncome: data.monthlyIncome,
    });
  }

  return (
    <ProfileSection
      title="Dados do Aluno"
      isEditing={section.isEditing}
      onEdit={section.startEditing}
      onSave={() => section.saveEditing(handleSave)}
      onCancel={section.cancelEditing}
    >
      <div className="grid grid-cols-2 gap-4">
        <ProfileField
          label="Nome"
          value={section.data.fullName}
          disabled={!section.isEditing}
          onChange={(v) => section.setData((p) => ({ ...p, fullName: v }))}
        />

        <ProfileField
          label="Email"
          value={section.data.email}
          disabled={!section.isEditing}
          onChange={(v) => section.setData((p) => ({ ...p, email: v }))}
        />
      </div>

      <ProfileField
        label="Telefone"
        value={section.data.phone}
        disabled={!section.isEditing}
        onChange={(v) => section.setData((p) => ({ ...p, phone: v }))}
      />

      {/* ✅ mesmo tipo do cadastro */}
      <Input
        type="date"
        label="Data de nascimento"
        value={section.data.birthDate}
        disabled={!section.isEditing}
        onChange={(v) => section.setData((p) => ({ ...p, birthDate: v }))}
      />

      {/* ✅ mesmo componente do cadastro */}
      <MonthlyIncomeSelect
        value={section.data.monthlyIncome}
        disabled={!section.isEditing}
        onChange={(value) =>
          section.setData((p) => ({ ...p, monthlyIncome: value }))
        }
      />
    </ProfileSection>
  );
}
