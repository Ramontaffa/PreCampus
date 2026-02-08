"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiUserLine, RiLockLine } from "@remixicon/react";
import Background from "../components/Background";
import Logo from "../assets/logo.png";
import Button from "../components/Button";

function Login() {
  const [placeholder, setPlaceholder] = useState("Email")
  const [userType, setUserType] = useState("estudante");

  return (
    <div className="min-h-screen bg-[#1E90FF] relative overflow-hidden">
      <Background />

      <div className="relative z-10 flex font-sans flex-col items-center justify-center min-h-screen">
          <div className="bg-white/50 font-sans py-3 px-20 flex flex-col justify-center items-center gap-3 rounded-2xl">
            <Image src={Logo} alt="precampus-logo" className="w-[140px] h-[116px] object-contain" />

            <div className="bg-white  rounded-full  flex flex-row items-center overflow-hidden">
              {
                ['Estudante', 'Escola', 'Universidade'].map((value, index) => (
                  <label className="cursor-pointer" key={value}>
                    <input type="radio" name="user-type" value={index} className="hidden peer" defaultChecked={value === "Estudante"} onChange={() => {
                      const normalized = value.toLowerCase();
                      setUserType(normalized);
                      setPlaceholder(value === "Estudante" ? "Email" : "CNPJ");
                    }}></input>
                    <span className={`font-heading inline-block py-2 px-5 text-zinc-500 peer-checked:bg-blue-700 peer-checked:text-white ${["Estudante","Escola"].includes(value) ? "border-r" : ""}`}>{value}</span>
                  </label>
                ))
              }
            </div>
            <div className="w-fit flex  flex-col justify-center items-center gap-3">
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiUserLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiUserLine>
                <input type="text" placeholder={placeholder} className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiLockLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiLockLine>
                <input type="text" placeholder="Senha" className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <Link href={`/${userType}/home`} className="w-full">
                <Button text="Entrar"></Button>
              </Link>
            </div>
            <div className="flex flex-row w-full justify-between p-2 overflow-hidden">
              <Link href={`/formulario/${userType}`} className="text-blue-600 border-b font-sans border-transparent cursor-pointer hover:border-blue-600">Criar conta</Link>
              <Link href={`/recuperar-senha`} className="text-blue-600 border-b border-transparent font-sans cursor-pointer hover:border-blue-600">Esqueci a senha</Link>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
