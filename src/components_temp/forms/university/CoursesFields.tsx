import type { UniversityCourseForm } from "../../../types/UniversityFormState";
import { Input } from "../../input";

interface Props {
  courses: UniversityCourseForm[];
  disabled?: boolean;
  onChange: (courses: UniversityCourseForm[]) => void;
}

const CoursesFields = ({ courses, disabled, onChange }: Props) => {
  function updateCourse(
    index: number,
    field: keyof UniversityCourseForm,
    value: string,
  ) {
    const updated = [...courses];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Cursos oferecidos</p>

      {courses.map((course, index) => (
        <div
          key={index}
          className="space-y-2 rounded-lg border border-[#bcd6f7] bg-[#f5f9fe62] p-4"
        >
          <Input
            label={`Curso ${index + 1}`}
            value={course.name}
            disabled={disabled}
            onChange={(v) => updateCourse(index, "name", v)}
          />

          <Input
            label="Descrição do curso"
            value={course.description}
            disabled={disabled}
            onChange={(v) => updateCourse(index, "description", v)}
          />
        </div>
      ))}

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange([...courses, { name: "", description: "" }])}
        className={`text-sm ${disabled ? "cursor-not-allowed opacity-50" : "text-violet-600"}`}
      >
        + Adicionar curso
      </button>
    </div>
  );
};

export default CoursesFields;
