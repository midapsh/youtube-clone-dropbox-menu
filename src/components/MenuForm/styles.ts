import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 16px;
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;

export const Form = styled.div``;
