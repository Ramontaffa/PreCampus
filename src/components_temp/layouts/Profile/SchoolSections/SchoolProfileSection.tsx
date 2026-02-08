import { useMemo } from "react";
import { Input } from "../../../input";
import ProfileSection from "../ProfileSection";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import { useAuth } from "../../../../contexts/AuthContext";
import { AddressSection } from "../../../forms/AddressSection";
import { SchoolYearCountFields } from "../../../forms/school/SchoolYearCountFields";
import type { SchoolUser } from "../../../../types/User";

interface Props {
  user: SchoolUser;
}

export default function SchoolProfileSection({ user }: Props) {
  const { updateUser } = useAuth();

  const basicInitial = useMemo(
    () => ({
      corporateName: user.corporateName ?? "",
      phone: user.phone ?? "",
      email: user.email ?? "", // leitura apenas
    }),
    [user],
  );

  const addressInitial = useMemo(
    () => ({
      street: user.address?.street ?? "",
      number: user.address?.number ?? "",
      cep: user.address?.cep ?? "",
      city: user.address?.city ?? "",
      state: user.address?.state ?? "",
    }),
    [user],
  );

  const classesInitial = useMemo(
    () => ({
      firstYear: user.classes?.firstYear ?? 0,
      secondYear: user.classes?.secondYear ?? 0,
      thirdYear: user.classes?.thirdYear ?? 0,
    }),
    [user],
  );

  const studentsCountInitial = useMemo(
    () => ({
      firstYear: user.studentsCount?.firstYear ?? 0,
      secondYear: user.studentsCount?.secondYear ?? 0,
      thirdYear: user.studentsCount?.thirdYear ?? 0,
    }),
    [user],
  );

  const basicSection = useEditableSection(basicInitial);
  const addressSection = useEditableSection(addressInitial);
  const classesSection = useEditableSection(classesInitial);
  const studentsCountSection = useEditableSection(studentsCountInitial);

  async function saveBasic(data: typeof basicInitial) {
    await updateUser({
      corporateName: data.corporateName,
      phone: data.phone,
    });
  }

  async function saveAddress(data: typeof addressInitial) {
    await updateUser({ address: data });
  }

  async function saveClasses(data: typeof classesInitial) {
    await updateUser({ classes: data });
  }

  async function saveStudentsCount(data: typeof studentsCountInitial) {
    await updateUser({ studentsCount: data });
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* DADOS BÁSICOS */}
      <ProfileSection
        title="Dados da Escola"
        isEditing={basicSection.isEditing}
        onEdit={basicSection.startEditing}
        onCancel={basicSection.cancelEditing}
        onSave={() => basicSection.saveEditing(saveBasic)}
      >
        <Input
          label="Razão Social"
          value={basicSection.data.corporateName}
          disabled={!basicSection.isEditing}
          onChange={(v) =>
            basicSection.setData((p) => ({ ...p, corporateName: v }))
          }
        />

        <Input
          label="Telefone"
          value={basicSection.data.phone}
          disabled={!basicSection.isEditing}
          onChange={(v) => basicSection.setData((p) => ({ ...p, phone: v }))}
        />

        <Input label="Email" value={basicSection.data.email} disabled />
      </ProfileSection>

      {/* ENDEREÇO */}
      <ProfileSection
        title="Endereço"
        isEditing={addressSection.isEditing}
        onEdit={addressSection.startEditing}
        onCancel={addressSection.cancelEditing}
        onSave={() => addressSection.saveEditing(saveAddress)}
      >
        <AddressSection
          address={addressSection.data}
          disabled={!addressSection.isEditing}
          onChange={(addr) => addressSection.setData(addr)}
        />
      </ProfileSection>

      {/* TURMAS */}
      <ProfileSection
        title="Turmas"
        isEditing={classesSection.isEditing}
        onEdit={classesSection.startEditing}
        onCancel={classesSection.cancelEditing}
        onSave={() => classesSection.saveEditing(saveClasses)}
      >
        <SchoolYearCountFields
          title="Quantidade de turmas por série"
          values={classesSection.data}
          disabled={!classesSection.isEditing}
          onChange={(values) => classesSection.setData(values)}
        />
      </ProfileSection>

      {/* ALUNOS */}
      <ProfileSection
        title="Quantidade de alunos"
        isEditing={studentsCountSection.isEditing}
        onEdit={studentsCountSection.startEditing}
        onCancel={studentsCountSection.cancelEditing}
        onSave={() => studentsCountSection.saveEditing(saveStudentsCount)}
      >
        <SchoolYearCountFields
          title="Quantidade de alunos por série"
          values={studentsCountSection.data}
          disabled={!studentsCountSection.isEditing}
          onChange={(values) => studentsCountSection.setData(values)}
        />
      </ProfileSection>
    </div>
  );
}
