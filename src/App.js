import React from 'react';
import './App.css';

import PasNavBar from './componentes/nav-bar'
import PasBanner from './componentes/banner'
import PasGaleriaHome from './componentes/galeria-home'
import PasFooter from './componentes/footer'

function App() {
  return (
    <>
      <PasNavBar />
      <PasBanner />
      <PasGaleriaHome />
      <PasFooter />
    </>
  );
}

export default App;
