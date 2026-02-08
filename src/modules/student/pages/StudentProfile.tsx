import HomeLayout from "../../../layout/HomeLayout";
import StudentSidebar from "../components/StudentSidebar";

export default function StudentProfile() {
  const inputClass = "w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 placeholder-gray-400";
  const labelClass = "block text-sm font-bold text-gray-600 mb-1 ml-1";

  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 pl-2">Meu Perfil</h2>

        <div className="bg-white rounded-3xl border-2 border-orange-500 shadow-lg p-8">
          
          {/* Seção Aluno */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 border-b pb-2 mb-6 flex items-center gap-2">
              Dados do Aluno(a)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input className={inputClass} placeholder="Ex: João da Silva" />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input className={inputClass} placeholder="Ex: joao@email.com" />
              </div>
              <div>
                <label className={labelClass}>Data de Nascimento</label>
                <input className={inputClass} type="date" />
              </div>
              <div>
                <label className={labelClass}>Telefone</label>
                <input className={inputClass} placeholder="(00) 00000-0000" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Universidades de Interesse</label>
                <input className={inputClass} placeholder="Separe por vírgulas..." />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Cursos de Interesse</label>
                <input className={inputClass} placeholder="Separe por vírgulas..." />
              </div>
            </div>
          </div>

          {/* Seção Responsável */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 border-b pb-2 mb-6 flex items-center gap-2">
              Dados do Responsável
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className={labelClass}>Nome Completo</label>
                <input className={inputClass} placeholder="Nome do responsável" />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input className={inputClass} placeholder="email@responsavel.com" />
              </div>
              <div>
                <label className={labelClass}>Parentesco</label>
                <input className={inputClass} placeholder="Ex: Pai, Mãe, Avó..." />
              </div>
              <div>
                <label className={labelClass}>CPF</label>
                <input className={inputClass} placeholder="000.000.000-00" />
              </div>
              <div>
                <label className={labelClass}>Renda Familiar Aprox.</label>
                <input className={inputClass} placeholder="R$ 0,00" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Endereço Completo</label>
                <input className={inputClass} placeholder="Rua, Número, Bairro, Cidade..." />
              </div>
              
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 pt-4 border-t border-gray-100">
                <div>
                   <label className={labelClass}>Nova Senha</label>
                   <input className={inputClass} type="password" placeholder="********" />
                </div>
                <div>
                   <label className={labelClass}>Confirmar Senha</label>
                   <input className={inputClass} type="password" placeholder="********" />
                </div>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-md cursor-pointer">
              Editar Perfil
            </button>
            <button className="bg-green-500 text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition-all active:scale-95 shadow-md cursor-pointer">
              Salvar Alterações
            </button>
          </div>

        </div>
      </div>
    </HomeLayout>
  );
}