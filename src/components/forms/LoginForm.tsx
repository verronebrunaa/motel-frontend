"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginUser } from "@/services/authService";
import Navbar from "../layout/Navbar";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: { email: string; senha: string }) => {
    try {
      const response = await loginUser(data);

      if (response?.token) {
        localStorage.setItem("token", response.token);

        setTimeout(() => {
          router.push("/reservas");
        }, 100);
      } else {
        setError("Erro ao fazer login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error(error);
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-[#2D5D34] text-center">
          Login
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2D5D34]"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded mt-1 text-[#2D5D34]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-[#2D5D34]"
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              {...register("senha")}
              className="w-full p-2 border rounded mt-1 text-[#2D5D34]"
            />
            {errors.senha && (
              <p className="text-red-500 text-sm">{errors.senha.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#5C8A59] text-white p-2 rounded hover:bg-[#2D5D34]"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-600">
          Não tem conta?{" "}
          <a href="/register" className="text-[#2D5D34]">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
