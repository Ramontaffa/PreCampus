"use client";

import HomeLayout from "../../../layout/HomeLayout";
import StudentSidebar from "../components/StudentSidebar";
import { currentStudentMock } from "../data/usersMock";
import { useState } from "react";

export default function StudentProfile() {
  const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-inner transition-all focus-visible:border-orange-400 focus-visible:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";
  const labelClass = "block text-sm font-semibold text-slate-700";

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: currentStudentMock.name,
    email: currentStudentMock.email,
    birthDate: currentStudentMock.birthDate,
    phone: currentStudentMock.phone,
    universities: currentStudentMock.universitiesOfInterest.join(", "),
    courses: currentStudentMock.coursesOfInterest.join(", "),
    guardianName: currentStudentMock.guardianName,
    guardianEmail: currentStudentMock.guardianEmail,
    guardianRelationship: currentStudentMock.guardianRelationship,
    guardianCpf: currentStudentMock.guardianCpf,
    guardianIncome: currentStudentMock.guardianIncome,
    guardianAddress: currentStudentMock.guardianAddress,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const disabledClass = !isEditing ? " cursor-not-allowed opacity-75" : "";

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    alert("Mock: alterações salvas.");
    setIsEditing(false);
  };
  const handleCancel = () => {
    setForm({
      name: currentStudentMock.name,
      email: currentStudentMock.email,
      birthDate: currentStudentMock.birthDate,
      phone: currentStudentMock.phone,
      universities: currentStudentMock.universitiesOfInterest.join(", "),
      courses: currentStudentMock.coursesOfInterest.join(", "),
      guardianName: currentStudentMock.guardianName,
      guardianEmail: currentStudentMock.guardianEmail,
      guardianRelationship: currentStudentMock.guardianRelationship,
      guardianCpf: currentStudentMock.guardianCpf,
      guardianIncome: currentStudentMock.guardianIncome,
      guardianAddress: currentStudentMock.guardianAddress,
      password: "",
      confirmPassword: "",
    });
    setIsEditing(false);
  };

  return (
    <HomeLayout sidebar={<StudentSidebar />}>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-orange-600">Perfil do aluno</p>
              <h2 className="text-3xl font-bold leading-tight text-slate-900">Meu perfil</h2>
              <p className="text-base text-slate-600">Mantenha seus dados atualizados para receber recomendações aderentes aos seus interesses.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Dados do aluno(a)</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Obrigatório</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClass}>Nome completo</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Ex: João da Silva"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Email</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="Ex: joao@email.com"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Data de nascimento</label>
                <input
                  className={inputClass + disabledClass}
                  type="date"
                  value={form.birthDate}
                  onChange={handleChange("birthDate")}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Telefone</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="(00) 00000-0000"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className={labelClass}>Universidades de interesse</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.universities}
                  onChange={handleChange("universities")}
                  placeholder="Separe por vírgulas..."
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className={labelClass}>Cursos de interesse</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.courses}
                  onChange={handleChange("courses")}
                  placeholder="Separe por vírgulas..."
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-slate-100 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Dados do responsável</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Opcional</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className={labelClass}>Nome completo</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.guardianName}
                  onChange={handleChange("guardianName")}
                  placeholder="Nome do responsável"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Email</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.guardianEmail}
                  onChange={handleChange("guardianEmail")}
                  placeholder="email@responsavel.com"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Parentesco</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.guardianRelationship}
                  onChange={handleChange("guardianRelationship")}
                  placeholder="Ex: Pai, Mãe, Avó..."
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>CPF</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.guardianCpf}
                  onChange={handleChange("guardianCpf")}
                  placeholder="000.000.000-00"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Renda familiar aprox.</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.guardianIncome}
                  onChange={handleChange("guardianIncome")}
                  placeholder="R$ 0,00"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className={labelClass}>Endereço completo</label>
                <input
                  className={inputClass + disabledClass}
                  value={form.guardianAddress}
                  onChange={handleChange("guardianAddress")}
                  placeholder="Rua, Número, Bairro, Cidade..."
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 rounded-2xl bg-slate-50 p-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClass}>Nova senha</label>
                <input
                  className={inputClass + disabledClass}
                  type="password"
                  value={form.password}
                  onChange={handleChange("password")}
                  placeholder="********"
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Confirmar senha</label>
                <input
                  className={inputClass + disabledClass}
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  placeholder="********"
                  disabled={!isEditing}
                />
              </div>
              <p className="md:col-span-2 text-sm text-slate-500">Use uma senha com pelo menos 8 caracteres, combinando letras, números e símbolos.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-end gap-3 border-t border-slate-100 pt-6 sm:flex-row">
            {!isEditing ? (
              <button
                type="button"
                onClick={handleEdit}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Editar perfil
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Salvar alterações
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}