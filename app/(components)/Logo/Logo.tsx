import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo_drevo.svg"
      width="200"
      height="171"
      alt="-"
      priority={true}
    />
  );
};

export default Logo;
