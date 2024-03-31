import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="hover:drop-shadow-white-3xl"
        src="/logo.svg"
        width={54}
        height={54}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;
