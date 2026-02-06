import { useMemo } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import ProfileSection from "../ProfileSection";
import ProfileField from "../ProfileField";
import { AddressSection } from "../../../forms/AddressSection";
import type { UniversityProfileForm } from "../../../../types/ProfileType";
import CoursesFields from "../../../forms/university/CoursesFields";
import SocialLinksFields from "../../../forms/university/SocialLinksFields";

type Props = {
  initialData: UniversityProfileForm;
};

export default function UniversityProfileSection({ initialData }: Props) {
  const { updateUser } = useAuth();

  const basicInitial = useMemo(
    () => ({
      corporateName: initialData.corporateName,
      email: initialData.email,
      phone: initialData.phone,
      description: initialData.description,
      website: initialData.website,
    }),
    [initialData],
  );

  const coursesInitial = useMemo(
    () => ({
      courses: initialData.courses,
    }),
    [initialData],
  );

  const socialInitial = useMemo(
    () => ({
      socialLinks: initialData.socialLinks,
    }),
    [initialData],
  );

  const addressInitial = useMemo(
    () => ({
      address: initialData.address,
    }),
    [initialData],
  );

  const basicSection = useEditableSection(basicInitial);
  const coursesSection = useEditableSection(coursesInitial);
  const socialSection = useEditableSection(socialInitial);
  const addressSection = useEditableSection(addressInitial);

  async function saveBasic(data: typeof basicSection.data) {
    await updateUser({
      corporateName: data.corporateName,
      phone: data.phone,
      description: data.description,
      website: data.website,
      email: data.email,
    });
  }

  async function saveCourses(data: typeof coursesSection.data) {
    await updateUser({ courses: data.courses });
  }

  async function saveSocial(data: typeof socialSection.data) {
    await updateUser({ socialLinks: data.socialLinks });
  }

  async function saveAddress(data: typeof addressSection.data) {
    await updateUser({ address: data.address });
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* Dados básicos */}
      <ProfileSection
        title="Dados da Universidade"
        isEditing={basicSection.isEditing}
        onEdit={basicSection.startEditing}
        onSave={() => basicSection.saveEditing(saveBasic)}
        onCancel={basicSection.cancelEditing}
      >
        <div className="grid grid-cols-2 gap-4">
          <ProfileField
            label="Razão Social"
            value={basicSection.data.corporateName}
            disabled={!basicSection.isEditing}
            onChange={(v) =>
              basicSection.setData((p) => ({ ...p, corporateName: v }))
            }
          />

          <ProfileField
            label="Email"
            value={basicSection.data.email}
            disabled={true}
          />
        </div>

        <ProfileField
          label="Telefone"
          value={basicSection.data.phone}
          disabled={!basicSection.isEditing}
          onChange={(v) => basicSection.setData((p) => ({ ...p, phone: v }))}
        />

        <ProfileField
          label="Descrição"
          value={basicSection.data.description}
          disabled={!basicSection.isEditing}
          onChange={(v) =>
            basicSection.setData((p) => ({ ...p, description: v }))
          }
        />

        <ProfileField
          label="Site"
          value={basicSection.data.website}
          disabled={!basicSection.isEditing}
          onChange={(v) => basicSection.setData((p) => ({ ...p, website: v }))}
        />
      </ProfileSection>

      {/* Endereço */}
      <ProfileSection
        title="Endereço"
        isEditing={addressSection.isEditing}
        onEdit={addressSection.startEditing}
        onSave={() => addressSection.saveEditing(saveAddress)}
        onCancel={addressSection.cancelEditing}
      >
        <AddressSection
          address={{
            street: addressSection.data.address.street,
            number: addressSection.data.address.number,
            cep: addressSection.data.address.cep,
            city: addressSection.data.address.city,
            state: addressSection.data.address.state,
          }}
          disabled={!addressSection.isEditing}
          onChange={(addr) =>
            addressSection.setData((p) => ({
              ...p,
              address: {
                street: addr.street,
                number: addr.number,
                city: addr.city,
                state: addr.state,
                cep: addr.cep,
              },
            }))
          }
        />
      </ProfileSection>

      {/* Cursos */}
      <ProfileSection
        title="Cursos oferecidos"
        isEditing={coursesSection.isEditing}
        onEdit={coursesSection.startEditing}
        onSave={() => coursesSection.saveEditing(saveCourses)}
        onCancel={coursesSection.cancelEditing}
      >
        <CoursesFields
          courses={coursesSection.data.courses}
          disabled={!coursesSection.isEditing}
          onChange={(courses) =>
            coursesSection.setData((p) => ({ ...p, courses }))
          }
        />
      </ProfileSection>

      {/* Redes sociais */}
      <ProfileSection
        title="Redes sociais"
        isEditing={socialSection.isEditing}
        onEdit={socialSection.startEditing}
        onSave={() => socialSection.saveEditing(saveSocial)}
        onCancel={socialSection.cancelEditing}
      >
        <SocialLinksFields
          socialLinks={socialSection.data.socialLinks}
          disabled={!socialSection.isEditing}
          onChange={(socialLinks) =>
            socialSection.setData((p) => ({ ...p, socialLinks }))
          }
        />
      </ProfileSection>
    </div>
  );
}
