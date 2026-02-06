import { Input } from "../../input";

interface ProfileFieldProps {
  label: string;
  value: string;
  disabled: boolean;
  onChange?: (value: string) => void;
}
const ProfileField = ({
  label,
  value,
  disabled,
  onChange,
}: ProfileFieldProps) => {
  return (
    <Input
      label={label}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
export default ProfileField;
