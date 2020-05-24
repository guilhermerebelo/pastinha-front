import React from 'react';

import PasNavBar from '../components/nav-bar'
import PasVisualizarProduto from '../components/visualizar-produto'
import PasFooter from '../components/footer'

export default function() {
  return (
    <>
      <PasNavBar />
      <PasVisualizarProduto />
      <PasFooter />
    </>
  );
}