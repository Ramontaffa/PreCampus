import { useHeader } from "../contexts/HeaderContext";
import { useEffect } from "react";
import Footer from "../components_temp/common/Footer";

export default function CreateEventScreen() {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Criar Evento");
  }, []);
    
  return (
    <>
    <div className=" bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <form className="rounded-md bg-slate-100">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nome do evento">
              <Input placeholder="Evento 1" />
            </Field>

            <Field label="Organizadora">
              <Input placeholder="UFPE" />
            </Field>

            <Field label="Endereço">
              <Input placeholder="Rua 123" />
            </Field>

            <Field label="Data">
              <div className="relative">
                <Input type="date" className="pr-10" />
              </div>
            </Field>

            <Field label="Interesse do público">
              <Input placeholder="Informática" />
            </Field>

            <Field label="Imagem da Capa do Evento">
              <label className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-green-600 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.99]">
                UPLOAD
                <input type="file" className="hidden" />
              </label>
            </Field>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Descrição da Atividade
            </label>
            <textarea
              placeholder="Descreva aqui o seu evento"
              className="h-36 w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-400"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="h-10 w-56 rounded-md bg-green-600 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.99]"
            >
              SALVAR EVENTO
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-black">
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={[
        "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none",
        "placeholder:text-slate-400 focus:border-blue-400",
        className,
      ].join(" ")}
    />
  );
}
