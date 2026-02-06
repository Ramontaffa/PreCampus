import { SquarePen } from "lucide-react";

interface ProfileSectionProps {
  title: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

const ProfileSection = ({
  title,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  children,
}: ProfileSectionProps) => {
  return (
    <div className="flex w-[60%] flex-col gap-4 rounded-xl bg-[#e2e8f0c9] px-10 py-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-600">{title}</h2>

        {!isEditing && (
          <button
            onClick={onEdit}
            type="button"
            className="text-zinc-700 transition hover:text-blue-400"
          >
            <SquarePen className="w-5" />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">{children}</div>

      {isEditing && (
        <div className="mt-2 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer rounded-lg border border-red-400 px-4 py-2 text-red-700 transition hover:bg-red-700 hover:text-white"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onSave}
            className="cursor-pointer rounded-lg border border-blue-700 px-4 py-2 text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
