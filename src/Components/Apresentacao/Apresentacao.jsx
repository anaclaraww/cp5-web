import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
    @media (max-width: 768px) {
        margin: 10px;
    }
    @media (max-width: 480px) {
        margin: 0px;
        
  }
    `;

const Beneficio = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 10px;
        margin: 5px;
    }
     `;

const Nome = styled.h2`
    color: #ff6f61
    `;

const Descricao = styled.p`
    color: #333;
    `;

const Apresentacao = () => {
    return (
        <Section>
            <Beneficio>
                <Nome>Entrega Rápida</Nome>
                <Descricao>Receba sua comida em minutos!</Descricao>
            </Beneficio>
            <Beneficio>
                <Nome>Varios de Restaurantes</Nome>
                <Descricao>Escolha entre centenas de opções</Descricao>
            </Beneficio>
            <Beneficio>
                <Nome>Pagamento Fácil</Nome>
                <Descricao>Pague como e onde quiser</Descricao>
            </Beneficio>
        </Section>
    );
};

export default Apresentacao;
