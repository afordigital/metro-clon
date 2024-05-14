import { UserRound } from "lucide-react";
import { Button } from "antd";
import Image from "next/image";

type Props = {};

export const Nav = (props: Props) => {
  return (
    <nav className="w-full py-8">
      <article className="w-full flex justify-between max-w-6xl mx-auto">
        <Image
          src="/imgs/logo.png"
          alt="Logo Metro"
          width={150}
          height={50}
        ></Image>
        <Button
          rootClassName="flex items-center h-full"
          type="primary"
          style={{ display: "flex" }}
          name="hola"
          title="hola"
          icon={<UserRound className="h-full" size={16} />}
          //   icon={<UserRound className="h-full align-middle" />}
        >
          Hola Children
        </Button>
      </article>
    </nav>
  );
};
