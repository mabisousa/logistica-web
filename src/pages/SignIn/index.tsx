import React, { useCallback, useRef, useContext } from "react";
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Container, Content, Background } from './style'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from '@unform/web'

import getValidationErrors from "../../utils/getValidationErrors";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup'
import { useToast } from "../../hooks/toast"
import { useAuth } from '../../hooks/auth'
import { Link, useHistory } from "react-router-dom";
interface FormData {
    email: string;
    senha: string;
}
const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: FormData) => {

        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('Informe um e-mail válido'),
                senha: Yup.string()
                .required("Senha obrigatória"),
            });
    
            await schema.validate(data, {
                abortEarly: false,
            });

            await signIn({
                email: data.email,
                senha: data.senha
            });
            history.push('dashboard')
        } catch(e) {
           
            if(e instanceof Yup.ValidationError) {
            const errors = getValidationErrors(e);
            formRef.current?.setErrors(errors);

            return
            }
            addToast({
                type: 'error',
                title: 'Erro de autenticação',
                description: 'Ocorreu um erro ao fazer login, verifique suas credenciais.',
            })
        }      
    },[ signIn, addToast, history ]);

    return (

    <Container>
        <Content>
            <Form ref={ formRef } onSubmit={ handleSubmit }>
                <h1>Faça seu login</h1>

                <Input icon={ FiMail } name="email" placeholder="E-mail" />
                <Input icon={ FiLock} name="senha" type="password" placeholder="Senha" />

                <Button type="submit"> Entrar </Button>

                <a href="teste">Esqueci minha senha</a>
            </Form>

            <Link to="signup"><FiLogIn/> Criar Conta</Link>
        </Content>
        <Background/>

    </Container>
    );
};
export default SignIn;