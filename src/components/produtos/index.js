import React from 'react';
import './style.css';

import Produto from '../produto'

function Produtos() {
    const produtos = createProducts(25);

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
        </section>
    );
}

export default Produtos;