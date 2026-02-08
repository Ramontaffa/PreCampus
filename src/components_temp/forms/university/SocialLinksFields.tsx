import type { SocialLinkForm } from "../../../types/UniversityFormState";
import { Input } from "../../input";

interface Props {
  socialLinks: SocialLinkForm[];
  disabled?: boolean;
  onChange: (links: SocialLinkForm[]) => void;
}

const SocialLinksFields = ({ socialLinks, disabled, onChange }: Props) => {
  function updateLink(
    index: number,
    field: keyof SocialLinkForm,
    value: string,
  ) {
    const updated = [...socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Redes sociais</p>

      {socialLinks.map((link, index) => (
        <div
          key={index}
          className="space-y-2 rounded-lg border border-[#bcd6f7] bg-[#f5f9fe62] p-4"
        >
          <Input
            label="Nome da rede social"
            value={link.name}
            disabled={disabled}
            onChange={(v) => updateLink(index, "name", v)}
          />

          <Input
            type="url"
            label="Link"
            value={link.url}
            disabled={disabled}
            onChange={(v) => updateLink(index, "url", v)}
          />
        </div>
      ))}

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange([...socialLinks, { name: "", url: "" }])}
        className={`text-sm ${disabled ? "cursor-not-allowed opacity-50" : "text-violet-600"}`}
      >
        + Adicionar rede social
      </button>
    </div>
  );
};

export default SocialLinksFields;
