import React from 'react';
import styled from 'styled-components';
import bc_hero from '../../img/backgrund_hero.png'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; 
  background-image: url("${bc_hero}");
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem; 
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333; 

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px; 
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 

  @media (max-width: 768px) {
    padding: 1rem; 
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.4rem; 
  }
`;

const FormButton = styled.button`
  padding: 0.7rem;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #e68a00; 
  }

  @media (max-width: 768px) {
    padding: 0.5rem; 
    font-size: 0.9rem; 
  }
`;

const Formcontato = () => {
  return (
    <FormContainer>
      <FormTitle>Inscreva-se para receber novidades</FormTitle>
      <FormStyle>
        <FormGroup>
          <FormLabel htmlFor="name">Nome:</FormLabel>
          <FormInput type="text" id="name" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" required />
        </FormGroup>
        <FormButton type="submit">Enviar</FormButton>
      </FormStyle>
    </FormContainer>
  );
};

export default Formcontato;
