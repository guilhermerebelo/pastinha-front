import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'

import vans from './vans.jpg'

export function Produto(param) {
    const { produto } = param;

    return (
        <Link to={`produto/${produto.id}`}>
            <div className="pas__produto">
                <div className="pas__produto-image">
                    <img src={vans} alt=""/>
                </div>
                <div>{produto.nome}</div>
                <h5>
                    <strong>R$ {produto.preco}</strong>
                </h5>
            </div>
        </Link>
    )
}

export default Produto