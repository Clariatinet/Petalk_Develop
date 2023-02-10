import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick: any;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: skyblue;
  margin-top: 2rem;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  :hover {
    background-color: pink;
  }
`;
