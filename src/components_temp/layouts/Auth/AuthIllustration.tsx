import authIllustration from "../../../assets/Illustration.svg";

const AuthIllustration = () => {
  return (
    <div className="h-full justify-center bg-[#F5F9FE] object-cover md:flex">
      <img
        src={authIllustration}
        alt="Ilustração educacional"
        className="w-[80%] object-contain"
      />
    </div>
  );
};

export default AuthIllustration;
