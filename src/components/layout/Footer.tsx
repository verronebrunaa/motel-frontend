"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#DCDBA8] text-center p-4 mt-6 shadow-md">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://taplink.cc/verronebru"
          className="text-[#2D5D34] hover:underline"
        >
          VerroneDev
        </Link>
        . Todos os direitos reservados.
      </p>
    </footer>
  );
}
