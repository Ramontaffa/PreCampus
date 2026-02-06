import { useState } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import Footer from "../components_temp/common/Footer";

export function Event() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="relative min-h-screen bg-gray-100">
      <div className="mx-auto max-w-3xl p-4">
        <div className="mb-5 h-52 rounded-lg bg-blue-600 md:h-64"></div>

        <h2 className="text-xl font-bold">Evento 1</h2>

        <p className="mb-3 text-sm text-gray-500">
          Escola São José •{" "}
          <span className="font-semibold">
            1020 pessoas garantiram presença
          </span>
        </p>

        <p className="mb-6 text-gray-600">
          O evento tem como objetivo reunir participantes para discutir temas
          atuais, promover networking e compartilhar conhecimentos relevantes
          para a área.
        </p>

        <div className="mb-8 space-y-3 text-gray-700">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-blue-600" />
            <span>17/11/2026</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-blue-600" />
            <span>Rua 123 - 230</span>
          </div>

          <div className="flex items-center gap-2">
            <IdentificationIcon className="h-5 w-5 text-blue-600" />
            <span>Geral</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600"
          >
            GARANTIR PRESENÇA
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
          <div className="animate-fade relative w-[90%] max-w-lg rounded-xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-xl text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="mb-5 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-400 text-3xl text-orange-500">
                ✓
              </div>
            </div>

            <h2 className="text-center text-xl font-bold">
              Presença confirmada!
            </h2>

            <p className="mt-3 text-center text-gray-500">
              Verifique seu email para mais informações
            </p>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
