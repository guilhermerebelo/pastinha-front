import React, { useState } from 'react';
import'./style.css';

import Vans from './vans.jpg'
const Vans2 = 'https://surfalive.fbitsstatic.net/img/p/tenis-vans-classic-u-authentic-black-black-71032/231045.jpg?w=800&h=800&v=no-change'

function VisualizarProduto() {
    const [image, setImage] = useState(Vans)

    return (
        <div className="container bg-light pas__vertical-space-60 pas__container" style={{marginBottom: '40px'}}>
            <div className="row ">
                <div className="col-md-8 bg-white pas__display-product-item">
                    <div className="row pas__display-product-item-img">
                        <img src={image} alt="" className="pas__item"/>
                    </div>
                    <br/>
                    <div className="pas__display-product-item-thumb">
                        <img src={Vans} alt="" onClick={() => setImage(Vans)} className="pas__item" />
                        <img src={Vans2} alt="" onClick={() => setImage(Vans2)} className="pas__item" />
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Vans old scholl</h4>
                    <p>cod: 3030</p>
                    <br/>
                    <h4>R$ 250,00</h4>
                    <input type="number" placeholder="Quantidade" className="pas__form" name="quantidade" id=""/>
                    <br/><br/>
                    <button className="btn btn-dark btn-block" onClick={() => alert('falta criar carrinho, checkout e login usuario')}>COMPRAR</button>
                    <br/><br/>
                </div>
            </div>
            <br/><br/><br/>
            <div className="row">
                <div className="col-md-12">
                    <h4>Sobre o produto</h4>
                    <br/>
                    <p>Lorem ipsum dictumst curabitur proin sociosqu class ad aliquam tellus, consequat senectus pellentesque nunc urna orci volutpat ligula quisque, id neque cursus ipsum cursus pellentesque vestibulum venenatis. potenti cursus adipiscing cubilia malesuada aliquam aptent arcu est quisque, commodo scelerisque semper rhoncus risus eros amet aliquam sagittis habitant, integer semper tincidunt eleifend amet ad placerat malesuada. nulla ultrices platea dapibus suscipit quam lorem etiam luctus lacus ut turpis aliquam nulla, etiam faucibus aliquam taciti rhoncus scelerisque porttitor sociosqu suspendisse litora elementum. faucibus ac pellentesque odio consequat sed conubia velit aliquam donec, sociosqu justo bibendum egestas torquent scelerisque lacus bibendum est, velit accumsan ut donec potenti ultrices sed ultricies</p>
                </div>
            </div>
        </div>
    );
}

export default VisualizarProduto;