import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PasHome from './pages/Home'
import PasProduct from './pages/Product'
import PasContato from './pages/Contato'
import PasSobre from './pages/Sobre'
import PasVisualizarProduto from './pages/VisualizarProduto'

export default function Routes() {
    return (
        <BrowserRouter>  
            <Switch>
                <Route path="/" exact component={PasHome} />
                <Route path="/produtos" component={PasProduct} />
                <Route path="/produto/:id" component={PasVisualizarProduto} />
                <Route path="/contato" component={PasContato} />
                <Route path="/sobre" component={PasSobre} />
            </Switch>
        </BrowserRouter>
    )
}