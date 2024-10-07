import styled from 'styled-components';
import React, { useState } from 'react';    
import 'bootstrap/dist/css/bootstrap.min.css';

/* Adicionando Imagens Comida */
import macarrao from '../../img/comidas/macarrao.jpg';
import feijoada from '../../img/comidas/feijoada.jpg';
import strogonoff from '../../img/comidas/strogonoff.jpg';
import parmegiana from '../../img/comidas/parmegiana.jpg';
import bacalhau from '../../img/comidas/bacalhau.jpg';
import baiao from '../../img/comidas/baiao.jpg';

/* Adicionando Imagens Bebida */
import cerveja from '../../img/bebidas/cerveja.jpg';
import refrigerantes from '../../img/bebidas/refrigerantes.jpg';
import vinho from '../../img/bebidas/vinho.jpg';

/* Adicionando Imagens Sobremesa */
import macarron from '../../img/sobremesa/macarron.jpg'
import sorvete from '../../img/sobremesa/sorvete.jpg'
import acai from '../../img/sobremesa/acai.jpg'
import bolo from '../../img/sobremesa/bolo.jpg'
import torta from '../../img/sobremesa/torta.jpg'
import gelatina from '../../img/sobremesa/gelatina.jpg'

const Card = ({ title, imgSrc, text }) => (
  <div className="col-md-4" style={{ marginTop: '30px' }}>
    <div className="card" style={{ width: '100%' }}>
      <img src={imgSrc} className="card-img-top" alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#ff9900', border: 'none' }}>Adicionar</a>
      </div>
    </div>
  </div>
);

function Funcionalidades() {
  const [choice, setChoice] = useState('');

  const handleSelectionChange = (event) => {
    setChoice(event.target.value);
  };

  const foodCards = [
    { title: 'Macarrão Simples', imgSrc: macarrao, text: 'Preço: 30,90'},
    { title: 'Feijoada', imgSrc: feijoada, text: 'Preço: 45,65'},
    { title: 'Strogonoff', imgSrc: strogonoff, text: 'Preço: 35,90'},
    { title: 'Parmegiana', imgSrc: parmegiana, text: 'Preço: 25,90'},
    { title: 'Bacalhau', imgSrc: bacalhau, text: 'Preço: 60,00'},
    { title: 'Baião de Dois', imgSrc: baiao, text: 'Preço: 45,90'},
  ];

  const drinkCards = [
    { title: 'Cerveja', imgSrc: cerveja, text: 'Preço: 19,90'},
    { title: 'Refrigerante', imgSrc: refrigerantes, text: 'Preço: 12,90'},
    { title: 'Vinho', imgSrc: vinho, text: 'Preço: 90,09'},
  ];

  const desertCards = [
    { title: 'Macarron', imgSrc: macarron, text: 'Preço: 40,90'},
    { title: 'Sorvete Pote', imgSrc: sorvete, text: 'Preço: 25,90'},
    { title: 'Açai', imgSrc: acai, text: 'Preço: 15,90'},
    { title: 'Bolo de Pote', imgSrc: bolo, text: 'Preço: 10,0'},
    { title: 'Torta Limão', imgSrc: torta, text: 'Preço: 25,90'},
    { title: 'Gelatina', imgSrc: gelatina, text: 'Preço: 12,10'},
  ]

const cards = choice === 'Bebidas' ? drinkCards : choice === 'Sobremesas' ? desertCards : foodCards;

  return (
    <div className="container">
      <h2 style={{marginTop: '30px'}}>Possui alguma dúvida?</h2>
      <select value={choice} onChange={handleSelectionChange} style={{border: 'none'}}>
        <option value="">Busque Agora</option>
        <option value="Comidas">Opções de Comida</option>
        <option value="Bebidas">Opções de Bebida</option>
        <option value="Sobremesas">Opções de Sobremesa</option>
      </select>

      <div className="row">
        {choice && cards.map((card, index) => (
          <Card key={index} title={card.title} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default Funcionalidades;