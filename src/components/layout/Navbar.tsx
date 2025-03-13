"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  // Simulação de autenticação (troque por um contexto ou lógica real)
  const isAuthenticated = false; // Altere para `true` se o usuário estiver logado

  const getAuthLinkProps = () => {
    if (pathname === "/login") {
      return { href: "/register", text: "Cadastrar", icon: FiUserPlus };
    }

    if (pathname === "/cadastro") {
      return { href: "/login", text: "Login", icon: FiLogIn };
    }

    if (isAuthenticated) {
      return { href: "/logout", text: "Sair", icon: FiLogOut };
    }

    return { href: "/login", text: "Login", icon: FiLogIn };
  };

  const { href, text, icon: Icon } = getAuthLinkProps();

  return (
    <nav className="bg-[#DCDBA8] shadow-md p-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Motel Digital logo"
          width={30}
          height={50}
          className="text-[#2D5D34]"
        />
      </Link>
      <Link href={href} className="flex items-center gap-2 text-[#2D5D34] font-medium">
        <Icon size={20} /> {text}
      </Link>
    </nav>
  );
}
