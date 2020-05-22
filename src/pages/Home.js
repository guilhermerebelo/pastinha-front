import React from 'react';

import PasNavBar from '../components/nav-bar'
import PasBanner from '../components/banner'
import PasGaleriaHome from '../components/galeria-home'
import PasFooter from '../components/footer'

import { Link, useHistory } from 'react-router-dom';

function App() {
  return (
    <>
      <PasNavBar />


        <Link className="back-link" to="/produtos">
          NAVEGAR PRODUTOS
        </Link>

      <PasBanner />
      <PasGaleriaHome />
      <PasFooter />
    </>
  );
}

export default App;
