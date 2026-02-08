import Image from "next/image";
import Link from "next/link";
import Background from "../components/Background";
import Logo from "../assets/logo.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#1E90FF] relative overflow-hidden">
      <Background />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div >

          <Image src={Logo} alt="precampus-logo" className="w-[360px] h-[300px] object-contain" />

          {/* Botão para voltar ao login */}
          <Link href="/login" className="w-full">
            <button 
                className="bg-blue-600 font-heading font-bold text-white px-6 py-2 rounded-full mt-14 hover:bg-blue-700 w-full cursor-pointer"
            >
                Entrar
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;