"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { registerUser } from "@/services/authService";
import Navbar from "../layout/Navbar";

const registerSchema = z
  .object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    documento: z
      .string()
      .min(3, "O documento deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    senha: z
      .string()
      .min(
        6,
        "A senha deve ter pelo menos 6 caracteres e pelo menos um caractere especial"
      )
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirmarSenha: z
      .string()
      .min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [senhaDigitada, setSenhaDigitada] = useState("");
  const [confirmarSenhaDigitada, setConfirmarSenhaDigitada] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: {
    nome: string;
    documento: string;
    email: string;
    senha: string;
  }) => {
    try {
      const RegisterUserData = {
        ...data,
        reservas: [],
      };
      await registerUser(RegisterUserData);
      router.push("/login");
    } catch (error) {
      console.error(error);
      setError("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-[#2D5D34] text-center">
          Criar Conta
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-[#2D5D34]"
            >
              Nome Completo
            </label>
            <input
              id="nome"
              type="text"
              {...register("nome")}
              className="w-full p-2 border rounded mt-1 text-[#2D5D34]"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="documento"
              className="block text-sm font-medium text-[#2D5D34]"
            >
              Documento
            </label>
            <input
              id="documento"
              type="text"
              {...register("documento")}
              className="w-full p-2 border rounded mt-1 text-[#2D5D34]"
            />
            {errors.documento && (
              <p className="text-red-500 text-sm">{errors.documento.message}</p>
            )}
          </div>
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
              onChange={(e) => setSenhaDigitada(e.target.value)}
            />
            {senhaDigitada.length > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                A senha deve ter pelo menos 6 caracteres e um caractere
                especial.
              </p>
            )}
            {errors.senha && (
              <p className="text-red-500 text-sm">{errors.senha.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmarSenha"
              className="block text-sm font-medium text-[#2D5D34]"
            >
              Confirmar Senha
            </label>
            <input
              id="confirmarSenha"
              type="password"
              {...register("confirmarSenha")}
              className="w-full p-2 border rounded mt-1 text-[#2D5D34]"
              onChange={(e) => setConfirmarSenhaDigitada(e.target.value)}
            />
            {confirmarSenhaDigitada.length > 0 &&
              senhaDigitada !== confirmarSenhaDigitada && (
                <p className="text-sm text-gray-500">
                  As senhas devem coincidir.
                </p>
              )}
            {errors.confirmarSenha && (
              <p className="text-red-500 text-sm">
                {errors.confirmarSenha.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#5C8A59] text-white p-2 rounded hover:bg-[#2D5D34]"
          >
            Criar Conta
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-600">
          Já tem uma conta?{" "}
          <a href="/login" className="text-[#2D5D34]">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
