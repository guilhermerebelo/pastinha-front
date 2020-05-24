import React from 'react';

import PasNavBar from '../components/nav-bar'
import PasFooter from '../components/footer'
import PasProdutos from '../components/produtos'

export default function() {
  return (
    <>
      <PasNavBar />
      <PasProdutos />
      <PasFooter />
    </>
  );
}