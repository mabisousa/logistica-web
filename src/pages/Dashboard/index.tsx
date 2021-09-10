import React, { useState, useEffect } from "react";
import { Container } from './style'
import api from "../../service/api"

interface Pessoa{
    nome: string;
    telefone: string;
}

const Dashboard: React.FC = () => {
    const [ pessoas, setPessoa ] = useState<Pessoa[]>([]);

    useEffect(() => {
        api.get("/pessoas").then((response) => {
            setPessoa(response.data);
        })
    }, [])

    return (
    <Container>
        <h1>dashboard</h1>
    {pessoas.map((pessoa) => (
        <div>
            <p>{pessoas.map((pessoa) => pessoa.nome)}</p>
        </div>
    ))}
        
    </Container>
    )
}

export default Dashboard;