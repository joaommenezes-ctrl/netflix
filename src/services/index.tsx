import { useState } from 'react';
import Constants from 'expo-constants';
import axios from 'axios';

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
            const response = await axios.get<ApiUser[]>(API_URL);
            const usuarios: ApiUser[] = response.data;

            const usuarioEncontrado: ApiUser | undefined = usuarios.find(
                (user: ApiUser) => user.email === email && user.password === password
            );

            if (usuarioEncontrado) {
                return;
            } else {
                throw new Error('Email ou senha incorretos.');
            }
        } catch (error) {
            let errorMessage = 'Erro desconhecido ao tentar fazer login.';

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    errorMessage = `Falha ao conectar à API. Status: ${error.response.status}`;
                } else if (error.request) {
                    errorMessage = 'Sem resposta da API. Verifique sua conexão de rede.';
                } else {
                    errorMessage = error.message;
                }
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }

            console.error('Erro de Login:', errorMessage, error);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { signIn, loading };
};