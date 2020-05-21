import React, { Component } from 'react'
import './style.css'

import vans from './vans.jpg'

export class Produto extends Component {
    constructor(props) {
        super(props)
        debugger
        this.produto = props.produto;
    }

    render() {
        return (
            <div className="pas__produto">
                <div className="pas__produto-image">
                    <img src={vans} alt=""/>
                </div>
                <div>{this.produto.nome}</div>
                <h5>
                    <strong>R$ {this.produto.preco}</strong>
                </h5>
            </div>
        )
    }
}

export default Produto
