import type { SchoolFormState } from "../../../types/SchoolFormState";
import { Input } from "../../input";
import { SchoolYearCountFields } from "../../forms/school/SchoolYearCountFields";
import { AddressSection } from "../../forms/AddressSection";

interface SchoolRegisterFormProps {
  form: SchoolFormState;
  setForm: React.Dispatch<React.SetStateAction<SchoolFormState>>;
}
const SchoolRegisterForm = ({ form, setForm }: SchoolRegisterFormProps) => {
  return (
    <>
      <Input
        label="Razão Social"
        value={form.corporateName}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            corporateName: v,
          }))
        }
      />

      <Input
        label="CNPJ"
        value={form.cnpj}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            cnpj: v,
          }))
        }
      />
      <Input
        label="Email"
        value={form.email}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            email: v,
          }))
        }
      />
      <Input
        type="password"
        label="Senha"
        value={form.password}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            password: v,
          }))
        }
      />
      <Input
        label="Telefone"
        value={form.phone}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            phone: v,
          }))
        }
      />

      <div className="bg-admin h-px w-full"></div>

      <AddressSection
        title="Endereço"
        address={form.address}
        onChange={(address) => setForm((prev) => ({ ...prev, address }))}
      />

      <div className="bg-admin h-px w-full"></div>

      <SchoolYearCountFields
        title="Turmas"
        values={form.classes}
        onChange={(values) =>
          setForm((prev) => ({
            ...prev,
            classes: values,
          }))
        }
      />

      <div className="bg-admin h-px w-full"></div>

      <SchoolYearCountFields
        title="Quantidade de alunos"
        values={form.studentsCount}
        onChange={(values) =>
          setForm((prev) => ({
            ...prev,
            studentsCount: values,
          }))
        }
      />
    </>
  );
};

export default SchoolRegisterForm;
