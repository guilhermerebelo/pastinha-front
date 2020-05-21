import React, { Component } from 'react'
import './style.css'

export class PasBanner extends Component {
    render() {
        return (
            <section className="container pas__banner_background">
                <div className="row">
                    <div className="col-md-12 pas__banner_container">

                        <div className="pas__banner_content">
                            <h1>SEJA SEMPRE ORIGINAL</h1>
                            <p>NOVOS ITENS AQUI</p>
                            <button className="btn btn-block btn-primary">COMPRAR</button>
                        </div>
                        
                    </div>
                </div>        
            </section>
        )
    }
}

export default PasBanner
