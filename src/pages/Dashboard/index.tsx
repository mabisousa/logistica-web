import React, { useState, useEffect } from "react";
import { Container } from "./style";
import api from "../../service/api";
import { Link } from "react-router-dom";

interface Pessoa{
    nome: string;
    telefone: string;
}

const Dashboard: React.FC = () => {
    const [ pessoas, setPessoa ] = useState<Pessoa[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("@Logistica:token");
        let config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        api.get("/pessoas", config).then((response) => {
            setPessoa(response.data);
        })
    }, [])

    return (
        <>
            <Container>
                <h1>dashboard</h1>
                {pessoas.map((pessoa) => (
                    <div>
                        <p>{pessoa.nome}</p>
                    </div>
                ))}
                <Link to="cadastro">
                    Cadastro
                </Link>
            </Container>

            
        </>
    )
}

export default Dashboard;