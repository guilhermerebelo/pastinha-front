import './style.css'

import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom';

import Produto from '../produto'

const PRODUTOS = [
    {
        nome: "Vans 1",
        preco: "250"
    },
    {
        nome: "Vans 2",
        preco: "350"
    },
    {
        nome: "Vans 3",
        preco: "450"
    },
    {
        nome: "Vans 4",
        preco: "550"
    }
]

export class PasGaleriaHome extends Component {
    constructor(props) {
        super(props)
        this.produtos = PRODUTOS;
    }

    render() {
        return (
            <section className="container pas__galeria-home-container">
                <div className="row">
                    {this.produtos.map((item, i) =>
                        <div key={i} className="col-md-3 pas__galeria-home-content">
                            <Produto produto={item}/>
                        </div>
                    )}
                </div>
                <div className="pas__galeria-home-btn">
                    <Link to="/produtos">
                        <button className="btn btn-block btn-primary">VER TUDO</button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default PasGaleriaHome
