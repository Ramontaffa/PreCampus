import { useMemo } from "react";
import ProfileSection from "../ProfileSection";
import { AddressSection, type Address } from "../../../forms/AddressSection";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import { useAuth } from "../../../../contexts/AuthContext";
import type { StudentUser } from "../../../../types/User";

type Props = {
  user: StudentUser;
};

export default function StudentProfileAddressSection({ user }: Props) {
  const { updateUser } = useAuth();

  const initialAddress = useMemo<Address>(
    () => ({
      street: user.address?.street ?? "",
      number: user.address?.number ?? "",
      cep: user.address?.cep ?? "",
      city: user.address?.city ?? "",
      state: user.address?.state ?? "",
    }),
    [user],
  );

  const section = useEditableSection(initialAddress);

  async function handleSave(address: Address) {
    await updateUser({ address });
  }

  return (
    <ProfileSection
      title="Endereço"
      isEditing={section.isEditing}
      onEdit={section.startEditing}
      onSave={() => section.saveEditing(handleSave)}
      onCancel={section.cancelEditing}
    >
      <AddressSection
        address={section.data}
        disabled={!section.isEditing}
        onChange={(address) => section.setData(address)}
      />
    </ProfileSection>
  );
}
