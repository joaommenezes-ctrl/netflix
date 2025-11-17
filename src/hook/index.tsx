import { useState } from 'react';
import Constants from 'expo-constants';

interface UserCredentials {
    email: string;
    password: string;
}

interface ApiUser {
    email: string;
    password: string;
    nome?: string;
}

const API_URL = Constants.expoConfig?.extra?.API_URL as string;

export const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const signIn = async ({ email, password }: UserCredentials): Promise<void> => {
        if (!email || !password) {
            throw new Error('Por favor, preencha todos os campos.');
        }

        if (!API_URL) {
            throw new Error('A URL da API não foi carregada. Verifique o app.json.');
        }
        setLoading(true);

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`Falha ao conectar à API. Status: ${response.status}`);
            }

            const usuarios: ApiUser[] = await response.json();

            const usuarioEncontrado: ApiUser | undefined = usuarios.find(
                (user: ApiUser) => user.email === email && user.password === password
            );

            if (usuarioEncontrado) {
                return;
            } else {
                throw new Error('Email ou senha incorretos.');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            console.error('Erro de Login:', errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { signIn, loading };
};