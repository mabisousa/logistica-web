import React, { createContext, useCallback, useState} from "react";
import { useContext } from "react";
import api from "../service/api";

interface Credentials {
    email: string;
    senha: string;
}

interface AuthState {
    jwt: string;
    usuario: object,
}

interface ContextData {
    signIn(credentials: Credentials): Promise<void>;
    signOut(): void;
    usuario: object,
}

const AuthContext = createContext<ContextData>(
    {} as ContextData
)

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("@Logistica:token");
        const usuario = localStorage.getItem("@Logistica:usuario");

    if(jwt && usuario) {
        return { jwt, usuario: JSON.parse(usuario) };

    }

    return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, senha }) => {
        
        const response = await api.post("authenticate", {
            email,
            senha,
        });
        const { jwt, usuario } = response.data;
        localStorage.setItem("@Logistica:token", jwt);
        localStorage.setItem("@Logistica:usuario", JSON.stringify(usuario));
            setData({jwt, usuario});

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@Logistica:token");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ usuario: data.usuario, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
};

export function useAuth(): ContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used withing an AuthProvider')
    }

    return context;
}