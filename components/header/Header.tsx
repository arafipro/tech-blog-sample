import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/images/logo_black.png";

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={cn("px-10 py-4", className)}>
      <Link href="#">
        <Image src={LogoImg} alt="Logo" width={256} height={50} />
      </Link>
    </div>
  );
};

export default Header;
