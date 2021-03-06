import React from 'react';

import PasNavBar from '../components/nav-bar'
import PasBanner from '../components/banner'
import PasGaleriaHome from '../components/galeria-home'
import PasFooter from '../components/footer'

export default function() {
  return (
    <>
      <PasNavBar />
      <PasBanner />
      <PasGaleriaHome />
      <PasFooter />
    </>
  );
}
