import HomeLayout from "../../../layout/HomeLayout";
import UniversitySidebar from "../components/UniversitySidebar";

export default function ProfileUniversity() {
  return (
    <HomeLayout sidebar={<UniversitySidebar />}>
    
      <h1 className="text-purple-700 text-xl font-semibold mb-6">
        Perfil:
      </h1>

      {/* Card do formulário */}
      <div className="bg-white border-2 border-purple-300 rounded-2xl px-10 py-8 w-full ">
        <h2 className="text-center text-blue-700 font-medium mb-8">
          DADOS DA UNIVERSIDADE
        </h2>

        <form className="space-y-4">
          {/* Razão Social */}
          <div>
            <label className="block text-xs font-medium text-blue-700 mb-1">
              RAZÃO SOCIAL
            </label>
            <input
              type="text"
              className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-blue-700 mb-1">
              EMAIL INSTITUCIONAL
            </label>
            <input
              type="email"
              className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* CNPJ e Telefone */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-blue-700 mb-1">
                CNPJ
              </label>
              <input
                type="text"
                placeholder="00.000.000/0000-00"
                className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                           focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-blue-700 mb-1">
                TELEFONE
              </label>
              <input
                type="text"
                placeholder="(00) 00000-0000"
                className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                           focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>

          {/* Cursos oferecidos */}
          <div>
            <label className="block text-xs font-medium text-blue-700 mb-1">
              CURSOS OFERECIDOS
            </label>
            <input
              type="text"
              className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-xs font-medium text-blue-700 mb-1">
              SENHA
            </label>
            <input
              type="password"
              className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Confirmar senha */}
          <div>
            <label className="block text-xs font-medium text-blue-700 mb-1">
              CONFIRMAR SENHA
            </label>
            <input
              type="password"
              className="w-full h-9 rounded-full border border-purple-300 px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Botões */}
          <div className="flex justify-center gap-6 pt-6">
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                         text-white text-sm font-medium px-6 py-2 rounded-full"
            >
              ✏️ EDITAR PERFIL
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600
                         text-white text-sm font-medium px-6 py-2 rounded-full"
            >
              💾 SALVAR EDIÇÃO
            </button>
          </div>
        </form>
      </div>
   </HomeLayout>
  );
}
