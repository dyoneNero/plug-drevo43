import Image from "next/image";
import LogoImg from "@/public/logo_drevo.svg";

const Logo = () => {
  return <Image src={LogoImg} width="200" height="171" alt="-" />;
};

export default Logo;
