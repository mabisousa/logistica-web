import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Botao';

import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
const handleSubmit = useCallback((data:object): void => {
    console.log(data);
}, []);
const formRef = useRef<FormHandles>(null);
return(
  <Container>
    <Background/>
    <Content>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <Input name="email" icon={FiUser} placeholder="E-mail" />
        <Input name="senha" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

      </Form>
      <a href="teste">
        <FiArrowLeft/>
        Voltar para o login</a>
    </Content>
  </Container>
)};

export default SignUp;