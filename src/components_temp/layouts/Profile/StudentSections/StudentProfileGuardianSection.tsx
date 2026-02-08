import { useMemo } from "react";
import ProfileSection from "../ProfileSection";
import ProfileField from "../ProfileField";
import { RelationshipSelect } from "../../../forms/student/RelationshipSelect";
import { AddressSection, type Address } from "../../../forms/AddressSection";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import { useAuth } from "../../../../contexts/AuthContext";
import type { StudentUser } from "../../../../types/User";

type Props = {
  user: StudentUser;
};

type GuardianForm = {
  fullName: string;
  relationship: string;
  otherRelationship: string;
  cpf: string;
  email: string;
  address: Address;
};

export default function StudentProfileGuardianSection({ user }: Props) {
  const { updateUser } = useAuth();

  const initialGuardian = useMemo<GuardianForm>(
    () => ({
      fullName: user.guardian?.fullName ?? "",
      relationship: user.guardian?.relationship ?? "",
      otherRelationship: user.guardian?.otherRelationship ?? "",
      cpf: user.guardian?.cpf ?? "",
      email: user.guardian?.email ?? "",
      address: {
        street: user.guardian?.address?.street ?? "",
        number: user.guardian?.address?.number ?? "",
        cep: user.guardian?.address?.cep ?? "",
        city: user.guardian?.address?.city ?? "",
        state: user.guardian?.address?.state ?? "",
      },
    }),
    [user],
  );

  const section = useEditableSection(initialGuardian);

  async function handleSave(data: GuardianForm) {
    await updateUser({
      guardian: {
        ...data,
        otherRelationship:
          data.relationship === "Outro" ? data.otherRelationship : "",
      },
    });
  }

  return (
    <ProfileSection
      title="Dados do Responsável"
      isEditing={section.isEditing}
      onEdit={section.startEditing}
      onSave={() => section.saveEditing(handleSave)}
      onCancel={section.cancelEditing}
    >
      <ProfileField
        label="Nome completo"
        value={section.data.fullName}
        disabled={!section.isEditing}
        onChange={(v) => section.setData((p) => ({ ...p, fullName: v }))}
      />

      {/* ✅ mesmo componente do cadastro */}
      <RelationshipSelect
        value={section.data.relationship}
        otherValue={section.data.otherRelationship}
        disabled={!section.isEditing}
        onChange={(relationship, other) =>
          section.setData((p) => ({
            ...p,
            relationship,
            otherRelationship: other ?? "",
          }))
        }
      />

      <ProfileField
        label="CPF"
        value={section.data.cpf}
        disabled={!section.isEditing}
        onChange={(v) => section.setData((p) => ({ ...p, cpf: v }))}
      />

      <ProfileField
        label="Email"
        value={section.data.email}
        disabled={!section.isEditing}
        onChange={(v) => section.setData((p) => ({ ...p, email: v }))}
      />

      <div className="bg-admin h-px w-full" />

      {/* ✅ mesmo componente do cadastro */}
      <AddressSection
        title="Endereço do responsável"
        address={section.data.address}
        disabled={!section.isEditing}
        onChange={(address) => section.setData((p) => ({ ...p, address }))}
      />
    </ProfileSection>
  );
}
