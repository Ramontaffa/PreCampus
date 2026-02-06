interface Props {
  disabled?: boolean;
}

const RegisterSubmitButton = ({ disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`h-12 w-full rounded-md text-sm font-semibold transition ${
        disabled
          ? "cursor-not-allowed bg-zinc-300 text-zinc-500"
          : "bg-blue-900 text-white hover:bg-blue-800"
      }`}
    >
      CADASTRAR
    </button>
  );
};

export default RegisterSubmitButton;
