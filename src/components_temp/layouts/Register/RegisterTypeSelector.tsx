import type { RegisterType } from "../../../types/RegisterType";

interface Props {
  value: RegisterType;
  onChange: (type: RegisterType) => void;
}

const RegisterTypeSelector = ({ value, onChange }: Props) => {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-zinc-700">Você é?</p>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Aluno", value: "student" },
          { label: "Escola", value: "school" },
          { label: "Universidade", value: "university" },
        ].map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value as RegisterType)}
            className={`h-11 rounded-md border text-sm font-medium transition ${
              value === item.value
                ? "border-blue-700 bg-blue-50 text-blue-800"
                : "border-zinc-300 text-zinc-600 hover:border-blue-400"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegisterTypeSelector;
