import styled from 'styled-components';
import telas_hero from '../../img/telas_hero.png'
import bc_hero from '../../img/backgrund_hero.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  margin: 0;
  background-image: url("${bc_hero}");

  @media (max-width: 600px) {
    background-color: lightgreen;
    flex-direction: column;
    text-align: center;
  }

 
`;

const Content = styled.div`
  padding: 0 0 0 2%;
  width: 40%;
  
  @media (max-width: 600px) {
  width: 100%;

  }

`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  text-align: left;
  margin: 0;
  @media (max-width: 600px) {
   font-size: large;
   text-align: center;
   margin-top: 15%;
 }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: left;
  margin: 0;


  @media (max-width: 600px) {
    font-size:small;
    text-align: center;
    width: 90vw;
  margin: 0 auto;

  }
`;

const Button = styled.button`
  background-color: #ff9900;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius:100px;
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: 600px) {
    padding: 1% 2%;
  font-size: small;
  margin-top: 10px;


  }
`;

const Circle = styled.div`
  width: 40%;
  height: 100vh;
  border-start-start-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #8bc34a;
  border: 1px solid #9bad86;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    background-color: transparent;
    border: none;
    box-shadow: none;
    width: 80%;
    margin-top: 5%;
  }
 `;

 const ImgHero = styled.img`
 max-width: 100%;
 max-height: 100vh;
 `

const HeroSection = () => {
  return (
    <Container>
      <Content>
        <Title>GourmetOn</Title>
        <Description>Sua fome na hora e em todo lugar. Com nosso GourmetOn tudo fica mais simples.</Description>
        <Button>Download</Button>
      </Content>
      <Circle>
        <ImgHero src={telas_hero} alt="" />
      </Circle>
    </Container>
  );
};

export default HeroSection;