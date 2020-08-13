import React from 'react';

import { IProps } from './types';
import { Container, Content } from './styles';

const Section: React.FC<IProps> = ({ variant, title, description }) => {
  return (
    <Container className={variant}>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
