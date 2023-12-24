import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/images/logo_black.png";

export default function Header() {
  return (
    <div className="px-10">
      <Link href="#">
        <Image src={LogoImg} alt="Logo" width={256} height={50} />
      </Link>
    </div>
  );
}
