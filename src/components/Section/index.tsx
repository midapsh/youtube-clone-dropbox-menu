import React from 'react';

import { useSideMenu } from '../../hooks/sidemenu';

import { IProps } from './types';
import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
} from './styles';

const Section: React.FC<IProps> = ({ variant, title, description }) => {
  const { openSideMenu } = useSideMenu();
  const buttonVariant = Math.round(Math.random());

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>DropBox</span>
          </h1>

          <button type="button" onClick={openSideMenu}>
            {buttonVariant === 0 ? 'Acessar' : 'Interagir'}
          </button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
