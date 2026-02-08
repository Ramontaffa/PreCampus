import Image from "next/image";
import logoPreCampus from "../../../assets/logoPreCampus.png";

const LoginHeader = () => {
  const logoSrc = typeof logoPreCampus === "string" ? logoPreCampus : logoPreCampus.src;

  return (
    <div>
      <div className="ml-27 flex justify-start">
        <Image
          className="w-45"
          src={logoSrc}
          alt="Logo PreCampus Laranja"
          width={180}
          height={60}
          priority
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-950">
          Bem-vindo ao PreCampus!
        </h1>

        <p className="my-4 text-justify text-sm text-gray-600">
          Acesse sua conta
        </p>
      </div>
    </div>
  );
};

export default LoginHeader;
