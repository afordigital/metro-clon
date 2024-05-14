'use client';
import { UserRound } from "lucide-react";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <header className="w-full">
      <nav className="w-full py-8 w-full flex justify-between max-w-6xl mx-auto">
        <Link href="/">
          <Image
            src="/imgs/logo.png"
            alt="Logo Metro"
            width={150}
            height={50}
          />
        </Link>
        <Button
          rootClassName="flex items-center h-full"
          type="primary"
          style={{ display: "flex" }}
          name="hola"
          title="hola"
          icon={<UserRound className="h-full" size={16} />}
        >
          Hola Children
        </Button>
      </nav>
    </header>

  );
};
export default Nav;