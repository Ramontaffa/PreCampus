import { RiSave3Line, RiEdit2Line, RiBuilding2Line } from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import SchoolSidebar from "../components/SchoolSidebar";

export default function SchoolProfile() {
  
  const labelStyle = "block text-blue-900 font-bold text-xs uppercase mb-2 ml-1";
  const inputStyle = "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all bg-white";

  return (
    <HomeLayout sidebar={<SchoolSidebar />}>
      
      <div className="mb-8 animate-fade-in-down">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                <RiBuilding2Line size={24} />
            </div>
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">
                Dados da Escola
            </h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-green-500 p-8 max-w-5xl">
        
        <form className="space-y-6">
          
          <div>
            <label className={labelStyle}>Razão Social</label>
            <input 
              type="text" 
              className={inputStyle} 
              defaultValue="Escola Exemplo Ltda."
            />
          </div>

          <div>
            <label className={labelStyle}>Email Institucional</label>
            <input 
              type="email" 
              className={inputStyle} 
              defaultValue="contato@escolaexemplo.com.br"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>CNPJ</label>
              <input 
                type="text" 
                className={inputStyle} 
                defaultValue="00.000.000/0000-00"
              />
            </div>
            <div>
              <label className={labelStyle}>Telefone</label>
              <input 
                type="text" 
                className={inputStyle} 
                defaultValue="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            <div>
                <label className={labelStyle}>Quantidade de Turmas</label>
                <div className="grid grid-cols-3 gap-3">
                    {['1º ANO', '2º ANO', '3º ANO'].map((ano) => (
                    <div key={ano}>
                        <p className="text-center text-[10px] text-gray-500 mb-1 font-bold">{ano}</p>
                        <input type="number" className={`${inputStyle} text-center px-2`} defaultValue={3} />
                    </div>
                    ))}
                </div>
            </div>

            <div>
                <label className={labelStyle}>Quantidade de Alunos</label>
                <div className="grid grid-cols-3 gap-3">
                    {['1º ANO', '2º ANO', '3º ANO'].map((ano) => (
                    <div key={ano}>
                        <p className="text-center text-[10px] text-gray-500 mb-1 font-bold">{ano}</p>
                        <input type="number" className={`${inputStyle} text-center px-2`} defaultValue={120} />
                    </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-blue-900 font-bold text-sm uppercase mb-4">
                Alterar Senha
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label className={labelStyle}>Nova Senha</label>
                <input type="password" className={inputStyle} placeholder="********" />
                </div>
                <div>
                <label className={labelStyle}>Confirmar Nova Senha</label>
                <input type="password" className={inputStyle} placeholder="********" />
                </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-4 pt-8">
            
            <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
                <RiEdit2Line size={20} />
                Editar Perfil
            </button>

            <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <RiSave3Line size={20} />
              Salvar Dados
            </button>

          </div>

        </form>

      </div>
    </HomeLayout>
  );
}