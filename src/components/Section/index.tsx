import React from 'react';

import { IProps } from './types';
import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
} from './styles';

const Section: React.FC<IProps> = ({ variant, title, description }) => {
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>DropBox</span>
          </h1>

          <button type="button">Interagir</button>
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
