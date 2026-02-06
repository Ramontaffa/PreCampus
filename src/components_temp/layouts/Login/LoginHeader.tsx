const LoginHeader = () => {
  return (
    <div>
      <div className="ml-27 flex justify-start">
        <img
          className="w-45"
          src="/src/assets/logoPreCampus.png"
          alt="Logo PreCampus Laranja"
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
