import React, { useRef, useCallback, } from "react";
import { FiArrowLeft, FiLock, FiUser, FiYoutube } from 'react-icons/fi'

import { Container, Content, Background } from './style'

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import * as Yup from 'yup'
import getValidationErrors from "../../utils/getValidationErrors";

import { Link, useHistory } from "react-router-dom";
import api from "../../service/api";
import { useToast } from "../../hooks/toast"

interface SignUpFormData {
    email: string,
    senha: string,
}

const SignUp: React.FC = () => {

    const { addToast } = useToast();
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleSubmit = useCallback(async (data: SignUpFormData) => {

        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('Informe um e-mail válido'),
                password: Yup.string()
                .required("Senha obrigatória"),
            });
            
            await schema.validate(data, {
                abortEarly: false,
            })

            await api.post('/pessoas/usuario', data);

            history.push('/');

            addToast({
                type: "success",
                title: "Cadastro realizado",
                description: "Você pode realizar seu login em Logística PSIN!",
            })

        } catch(e) {

            if(e instanceof Yup.ValidationError) {
            const errors = getValidationErrors(e);

            formRef.current?.setErrors(errors);
        
                return
            }
        }

        addToast({
            type: "error",
            title: "Erro ao acadastrar",
            description: "Ocorreu um erro ao cadastrar, tente novamente!",
        })
        
    },[ addToast, history ]);

    
    return (
        <Container>
            <Background/>

            <Content>
                <Form 
                ref={formRef} 
                onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={ FiUser } name="email" placeholder="E-mail" />
                    <Input icon={ FiLock } name="password" type="password" placeholder="Senha" />

                    <Button type="submit"> Cadastrar </Button>
                </Form>

                <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
            </Content>
        </Container>
    )};
export default SignUp;