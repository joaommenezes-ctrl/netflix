import { useState } from 'react';
import { Alert } from 'react-native';
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

    const signIn = async ({ email, password }: UserCredentials): Promise<boolean> => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return false;
        }

        if (!API_URL) {
            Alert.alert('Erro de Configuração', 'A URL da API não foi carregada. Verifique o app.json.');
            return false;
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
                Alert.alert('Sucesso!', `Bem-vindo, ${usuarioEncontrado.nome || 'Usuário'}!`);
                return true;
            } else {
                Alert.alert('Erro de Login', 'Email ou senha incorretos.');
                return false;
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            console.error('Erro de Login:', errorMessage);
            Alert.alert('Erro', 'Não foi possível realizar o login. Tente novamente mais tarde.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { signIn, loading };
};