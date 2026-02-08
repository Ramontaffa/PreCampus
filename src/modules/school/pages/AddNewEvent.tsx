"use client";

import HomeLayout from "../../../layout/HomeLayout";
import SchoolSidebar from "../components/SchoolSidebar";

export default function AddNewEvent() {
  return (
    <HomeLayout sidebar={<SchoolSidebar />}>
     
    <div className="flex flex-col w-full px-8 py-6">
          <h1 className="text-2xl font-semibold text-green-600 mb-6">
            Adicionar Eventos:
          </h1>

         <form className="bg-white border-2 border-green-400 rounded-3xl p-8 w-full">

  <div className="space-y-4">
    
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-blue-800">
        NOME DO EVENTO
      </label>
      <input
    type="text"
    className="w-full px-4 py-2 rounded-xl border border-green-500 bg-white outline-none focus:border-green-600 focus:ring-0 transition"
  />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-blue-800">
        SUBTITULO DO EVENTO
      </label>
      <input
    type="text"
    className="w-full px-4 py-2 rounded-xl border border-green-500 bg-white outline-none focus:border-green-600 focus:ring-0 transition"
  />
    </div>

    <div className="flex gap-4">
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-medium text-blue-800 border-amber-700">
          DATA
        </label>
       <input
    type="text"
    className="w-full px-4 py-2 rounded-xl border border-green-500 bg-white outline-none focus:border-green-600 focus:ring-0 transition"
  />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-medium text-blue-800">
          HORÁRIO
        </label>
       <input
    type="text"
    className="w-full px-4 py-2 rounded-xl border border-green-500 bg-white outline-none focus:border-green-600 focus:ring-0 transition"
  />
      </div>
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-blue-800">
        LOCAL DO EVENTO
      </label>
      <input
    type="text"
    className="w-full px-4 py-2 rounded-xl border border-green-500 bg-white outline-none focus:border-green-600 focus:ring-0 transition"
  />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-blue-800">
        DESCRIÇÃO DO EVENTO
      </label>
     <textarea
    rows={3}
    onInput={(e) => {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }}
    className="w-full px-4 py-2 rounded-xl border border-green-500 bg-white outline-none focus:border-green-600 focus:ring-0 transition resize-none overflow-hidden"
  />
    </div>

    <div className="flex flex-col gap-1 ">
      <label className="text-sm font-medium text-blue-800">
        IMAGEM
      </label>
    <div className="rounded-md border border-green-500  px-2 py-1 text-sm">
      <input
        type="file"
        className="
                  file:mr-4 file:rounded file:border
                  file:border-gray-300 file:bg-gray-100
                  file:px-2 file:py-1
                  file:text-sm file:text-gray-700
                  focus:outline-none"
      />
    </div>
    </div>

    <div className="flex justify-center mt-6">
      <button
        className="bg-green-500 hover:bg-green-500 text-white font-semibold px-10 py-3 rounded-xl transition"
      >
        ENVIAR
      </button>
    </div>
  </div>
</form>
</div>
    </HomeLayout>
  );
}