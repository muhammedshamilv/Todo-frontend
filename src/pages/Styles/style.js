import styled from '@emotion/styled';

export const Button = styled.button`
  .btn2 span:first-child {
    transform: translateX(-101%);
    transition: transform 0.3s ease-in;
  }
  .btn2:hover span {
    transform: translateX(0);
  }
`;
