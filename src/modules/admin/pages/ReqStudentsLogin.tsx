"use client";

import { useState } from "react";
import { RiSearchLine, RiCloseCircleLine, RiCheckboxCircleLine } from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import AdminSidebar from "../components/AdminSidebar";

// Dados Fakes
const mockStudents = [
  { id: 1, name: "Maria Clara Silva", email: "maria@email.com" },
  { id: 2, name: "João Pedro Santos", email: "joao@email.com" },
  { id: 3, name: "Ana Beatriz Costa", email: "ana@email.com" },
];

const mockInstitutions = [
  { id: 101, name: "Escola Estadual Dom Bosco", type: "Escola" },
  { id: 201, name: "Faculdade de Ciências Humanas", type: "Universidade" },
];

export default function ReqStudentsLogin() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Função para selecionar/deselecionar
  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <HomeLayout sidebar={<AdminSidebar />}>
      
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
        <div>
            <h1 className="text-3xl font-bold text-red-600 cursor-pointer">Validação de Cadastros</h1>
            <p className="text-gray-500">Aprove novos usuários na plataforma.</p>
        </div>
        
        {/* Barra de Busca Simples */}
        <div className="relative w-full md:w-64">
            <input 
                type="text" 
                placeholder="Buscar usuário..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400 text-sm"
            />
            <RiSearchLine size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="space-y-8 max-w-5xl">

        {/* --- SEÇÃO ALUNOS --- */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                    ALUNOS PENDENTES
                </h2>
                <span className="bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">{mockStudents.length}</span>
            </div>
            
            <div className="divide-y divide-gray-100">
                {mockStudents.map((student) => (
                    <label key={student.id} className="flex items-center px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
                        <input 
                            type="checkbox" 
                            className="w-5 h-5 text-red-600 rounded border-gray-300 focus:ring-red-500 mr-4"
                            checked={selectedIds.includes(student.id)}
                            onChange={() => toggleSelect(student.id)}
                        />
                        <div>
                            <p className="font-semibold text-gray-800">{student.name}</p>
                            <p className="text-xs text-gray-500">{student.email}</p>
                        </div>
                    </label>
                ))}
            </div>
        </div>

        {/* --- SEÇÃO INSTITUIÇÕES --- */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-orange-900 flex items-center gap-2">
                    INSTITUIÇÕES PENDENTES
                </h2>
                <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded-full">{mockInstitutions.length}</span>
            </div>
            
            <div className="divide-y divide-gray-100">
                {mockInstitutions.map((inst) => (
                    <label key={inst.id} className="flex items-center px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
                        <input 
                            type="checkbox" 
                            className="w-5 h-5 text-red-600 rounded border-gray-300 focus:ring-red-500 mr-4"
                            checked={selectedIds.includes(inst.id)}
                            onChange={() => toggleSelect(inst.id)}
                        />
                        <div className="flex items-center gap-3">
                            <div>
                                <p className="font-semibold text-gray-800">{inst.name}</p>
                                <span className={`text-xs px-2 py-0.5 rounded border ${inst.type === 'Escola' ? 'bg-purple-50 text-purple-700 border-purple-100' : 'bg-teal-50 text-teal-700 border-teal-100'}`}>
                                    {inst.type}
                                </span>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </div>

        {/* BOTÕES FLUTUANTES OU FIXOS EM BAIXO */}
        <div className="flex justify-end gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-red-200 text-red-600 font-bold hover:bg-red-50 transition-colors uppercase text-sm cursor-pointer">
                <RiCloseCircleLine size={20} />
                Recusar Selecionados
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 shadow-lg shadow-green-100 transition-colors uppercase text-sm cursor-pointer">
                <RiCheckboxCircleLine size={20} />
                Aprovar Selecionados ({selectedIds.length})
            </button>
        </div>

      </div>

    </HomeLayout>
  );
}