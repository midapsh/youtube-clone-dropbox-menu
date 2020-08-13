import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = ({ children }) => {
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>DropBox</span>
        </h1>

        <button className="action--close" type="button">
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="button">Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
      {children}
    </Container>
  );
};

export default MenuForm;
