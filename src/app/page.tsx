"use client";

import { useRouter } from "next/navigation";
import { MdHotel, MdEventAvailable, MdPayment } from "react-icons/md";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      <header className="text-center py-16 bg-[#2D5D34] text-white">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Gerencie suas reservas de forma rápida e fácil!
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg">
          Reserve seu quarto no melhor motel em poucos cliques.
        </p>
        <button
          className="mt-6 bg-[#DCDBA8] text-[#2D5D34] px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
          onClick={() => router.push("/reservas")}
        >
          Fazer Reserva
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <div className="bg-[#DCDBA8] p-4 rounded-lg shadow-md flex items-center gap-4">
          <MdEventAvailable size={40} className="text-[#2D5D34]" />
          <div>
            <h3 className="text-lg font-semibold">Reservas Feitas</h3>
            <p className="text-gray-600">+120 reservas</p>
          </div>
        </div>
        <div className="bg-[#DCDBA8] p-4 rounded-lg shadow-md flex items-center gap-4">
          <MdHotel size={40} className="text-[#2D5D34]" />
          <div>
            <h3 className="text-lg font-semibold">Motéis Disponíveis</h3>
            <p className="text-gray-600">8 motéis cadastrados</p>
          </div>
        </div>
        <div className="bg-[#DCDBA8] p-4 rounded-lg shadow-md flex items-center gap-4">
          <MdPayment size={40} className="text-[#2D5D34]" />
          <div>
            <h3 className="text-lg font-semibold">Pagamentos Processados</h3>
            <p className="text-gray-600">R$ 50.000,00</p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
