import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Estilizando o rodapé
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 2rem;
  width: 100%;
  text-align: center; 

  @media (max-width: 768px) {
    padding: 1rem; 
  }
`;

// Estilizando os links
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  margin-bottom: 1rem;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ff9900;
    }

    @media (max-width: 768px) {
      margin: 0.5rem 0; 
    }
  }
`;

// Estilizando os ícones das redes sociais
const Redesocias = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    margin: 0 1rem;
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ff9900; /* Cor ao passar o mouse */
    }

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Tamanho dos ícones menor em telas pequenas */
      margin: 0 0.5rem; /* Menos espaçamento em telas menores */
    }
  }
`;

const FooterTexto = styled.p`
  margin: 0;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem; /* Tamanho do texto menor em telas pequenas */
  }
`;

const Rodape = () => {
  return (
    <Footer>
      <FooterLinks>
        <a href="#home">Início</a>
        <a href="#contato">Contato</a>
        <a href="#termos">Termos de Uso</a>
      </FooterLinks>
      <Redesocias>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Redesocias>
      <FooterTexto>&copy; 2024 GourmetOn. Todos os direitos reservados.</FooterTexto>
    </Footer>
  );
};

export default Rodape;
