import React from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom';

import Produto from '../produto'

export function PasGaleriaHome() {
    const produtos = createProducts(4);

    function createProducts(total = 15) {
        let produtos = [];

        for (let i = 0; i < total; i++) {
            produtos.push({
                id: i + 1,
                nome: `Vans ${i}`,
                preco: "550"
            });
        }

        return produtos;
    }

    return (
        <section className="container pas__galeria-home-container">
            <div className="row">
                {produtos.map((item, i) =>
                    <div key={i} className="col-md-3 pas__galeria-home-content">
                        <Produto produto={item}/>
                    </div>
                )}
            </div>
            <div className="pas__galeria-home-btn">
                <Link to="produtos">
                    <button className="btn btn-block btn-primary">VER TUDO</button>
                </Link>
            </div>
        </section>
    )
}

export default PasGaleriaHome
