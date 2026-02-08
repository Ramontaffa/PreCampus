import { Input } from "../input";

export interface Address {
  street: string;
  number: string;
  cep: string;
  city: string;
  state: string;
}

interface Props {
  title?: string;
  address: Address;
  disabled?: boolean;
  onChange: (address: Address) => void;
}

export function AddressSection({ title, address, disabled, onChange }: Props) {
  return (
    <>
      {title && <p className="text-sm font-medium text-zinc-700">{title}</p>}

      <Input
        label="Rua"
        value={address.street}
        disabled={disabled}
        onChange={(v) => onChange({ ...address, street: v })}
      />

      <div className="flex gap-5">
        <Input
          label="Número"
          value={address.number}
          disabled={disabled}
          onChange={(v) => onChange({ ...address, number: v })}
        />

        <Input
          label="CEP"
          value={address.cep}
          disabled={disabled}
          onChange={(v) => onChange({ ...address, cep: v })}
        />
      </div>

      <Input
        label="Cidade"
        value={address.city}
        disabled={disabled}
        onChange={(v) => onChange({ ...address, city: v })}
      />

      <Input
        label="Estado"
        value={address.state}
        disabled={disabled}
        onChange={(v) => onChange({ ...address, state: v })}
      />
    </>
  );
}
