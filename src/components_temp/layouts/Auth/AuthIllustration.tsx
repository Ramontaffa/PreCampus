import Image from "next/image";
import authIllustration from "../../../assets/Illustration.svg";

const AuthIllustration = () => {
  return (
    <div className="h-full justify-center bg-[#F5F9FE] object-cover md:flex">
      <Image
        src={authIllustration}
        alt="Ilustração educacional"
        className="w-[80%] object-contain"
        width={800}
        height={600}
        priority
      />
    </div>
  );
};

export default AuthIllustration;
