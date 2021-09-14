import React, { useCallback, useRef } from "react";
import { Container } from './style'
import api from "../../service/api"
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";

interface PessoaProps{
    nome: string,
    email: string,
    senha: string
    telefone: string
}

interface Usuario{
    
}

const Cadastro: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const pessoa = {
        nome: "",
        telefone: "",
        usuario: {
            email: "",
            senha: ""
        }
    }

    const cadastrar = useCallback(async (data: PessoaProps) =>{
        pessoa.nome = data.nome;
        pessoa.usuario.email = data.email;
        pessoa.usuario.senha = data.senha;
        pessoa.telefone = data.telefone;
        

        await api.post("/pessoas", pessoa)
    }, [])
    return (
        <>
            <Container>
                <h1>dashboard</h1> 
                <Form ref={formRef} onSubmit={cadastrar}>
                    <Input name="nome" placeholder="Informe o nome"/>
                    <Input name="telefone" placeholder="Telefone com DDD"/>
                    <Input name="email" placeholder="E-mail"/>
                    <Input name="senha" placeholder="Senha"/>
                    
                    <Button type="submit">Cadastrar</Button>
                </Form> 
            </Container>
        </>
    )
}

export default Cadastro;