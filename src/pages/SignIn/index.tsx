import React, { useRef, useCallback } from 'react';
import { FiMail, FiLogIn, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => {
const handleSubmit = useCallback((data:object): void => {
    console.log(data);
}, []);
const formRef = useRef<FormHandles>(null);
return(
  <Container>
    <Content>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="teste">Esqueci minha senha</a>
      </Form>
      <a href="teste">
        <FiLogIn/>
        Criar conta</a>
    </Content>
    <Background/>
  </Container>
)};

export default SignIn;