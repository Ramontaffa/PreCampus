import { useMemo } from "react";
import ProfileSection from "../ProfileSection";
import { InterestsFields } from "../../../forms/student/InterestsFields";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import { useAuth } from "../../../../contexts/AuthContext";
import type { StudentUser } from "../../../../types/User";

type Props = {
  user: StudentUser;
};

type FormState = {
  interestedCourses: string[];
  interestedUniversities: string[];
};

export default function StudentProfileInterestsSection({ user }: Props) {
  const { updateUser } = useAuth();

  const initialData = useMemo<FormState>(
    () => ({
      interestedCourses: user.interestedCourses?.length
        ? user.interestedCourses
        : ["", "", ""],
      interestedUniversities: user.interestedUniversities?.length
        ? user.interestedUniversities
        : ["", "", ""],
    }),
    [user],
  );

  const section = useEditableSection(initialData);

  async function handleSave(data: FormState) {
    await updateUser({
      interestedCourses: data.interestedCourses.map((s) => s.trim()),
      interestedUniversities: data.interestedUniversities.map((s) => s.trim()),
    });
  }

  return (
    <ProfileSection
      title="Interesses"
      isEditing={section.isEditing}
      onEdit={section.startEditing}
      onSave={() => section.saveEditing(handleSave)}
      onCancel={section.cancelEditing}
    >
      <InterestsFields
        title="Cursos de interesse (até 3)"
        values={section.data.interestedCourses}
        disabled={!section.isEditing}
        onChange={(values) =>
          section.setData((p) => ({ ...p, interestedCourses: values }))
        }
      />

      <InterestsFields
        title="Universidades de interesse"
        values={section.data.interestedUniversities}
        disabled={!section.isEditing}
        onChange={(values) =>
          section.setData((p) => ({ ...p, interestedUniversities: values }))
        }
      />
    </ProfileSection>
  );
}
