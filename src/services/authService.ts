import { RegisterUserData } from "@/types/types";

const API_URL = "http://localhost:5027/api/auth";

export async function registerUser(userData: RegisterUserData) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Erro ao registrar o usuário.");
    }

    return response.json();
}

export async function loginUser(userData: { email: string; senha: string }) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Erro ao fazer login.");
    }

    return response.json();
}