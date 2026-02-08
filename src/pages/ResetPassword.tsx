"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiUserLine, RiLockLine } from "@remixicon/react";
import Background from "../components/Background";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import ResetPasswordMessage from "../components/ResetPasswordMessage";

function ResetPassword() {
  const [showMessage, setShowMessage] = useState(false)
  const [placeholder, setPlaceholder] = useState("Email")
  const [userType, setUserType] = useState("estudante");

  function showAlertMessage() {
    setShowMessage(true)
  }

  return (
    <div className="min-h-screen bg-[#1E90FF] relative overflow-hidden">
      {showMessage && <ResetPasswordMessage Close={() => {
        setShowMessage(false)
      }} />}
      <Background />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="bg-white/50 py-3 px-20 flex flex-col justify-center items-center gap-3 rounded-2xl">
            <Image src={Logo} alt="precampus-logo" className="w-[140px] h-[116px] object-contain" />

            <h2 className="text-xl font-semibold text-blue-800">Recuperação de   senha</h2>
            <p className="text-blue-900 mb-3">Selecione o tipo de usuário e digite o email:</p>

            <div className="bg-white rounded-full  flex flex-row items-center overflow-hidden">
              {
                ['Estudante', 'Escola', 'Universidade'].map((value, index) => (
                  <label className="cursor-pointer" key={value}>
                    <input type="radio" name="user-type" value={index} className="hidden peer" defaultChecked={value === "Estudante"} placeholder="Email" onChange={() => {
                      setUserType(value.toLowerCase());
                      setPlaceholder(value === "Estudante" ? "Email" : "Email da Instituição");
                    }}></input>
                    <span className={`inline-block py-2 px-5 text-zinc-500 peer-checked:bg-blue-700 peer-checked:text-white ${["Estudante","Escola"].includes(value) ? "border-r" : ""}`}>{value}</span>
                  </label>
                ))
              }
            </div>
            <div className="w-fit flex flex-col justify-center items-center gap-3">
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiUserLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiUserLine>
                <input type="email" placeholder={placeholder} className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <Button text="Enviar" onClick={showAlertMessage}></Button>
            </div>
            <Link href={`/login`} className="text-blue-600 border-b border-transparent cursor-pointer hover:border-blue-600 mt-5">Voltar</Link>
          </div>
      </div>
    </div>
  );
}

export default ResetPassword;
