import Image from "next/image";
import Link from "next/link";

const SocMediaBtn = ({ link, image, classNameLink }: any) => {
  return (
    <Link href={link} className={classNameLink}>
      <Image src={image} width={60} height={60} alt="dfg" />
    </Link>
  );
};

export default SocMediaBtn;
