import React from 'react';
import ColorWidget from '../organisms/ColorWidget';
import Title from '../atoms/Title';

const App = () => (
  <div className="app" data-test="component-app">
    <Title h2>Concept Test Sodimac Microblend</Title>
    <p>Colores afines en pintura Kolor</p>
    <ColorWidget />
  </div>
);

export default App;
