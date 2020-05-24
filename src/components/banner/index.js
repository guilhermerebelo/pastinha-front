import './style.css'

import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

const backgroundColor = { 
    backgroundImage: `url(https://cdn.wallpapersafari.com/64/74/h3B7v0.jpg)`, 
    backgroundSize: 'cover'
}

export class PasBanner extends Component {
    render() {
        return (
            <section className="container pas__banner_background" style={backgroundColor}>
                <div className="row">
                    <div className="col-md-12 pas__banner_container">

                        <div className="pas__banner_content">
                            <h1 style={{fontSize: '80px'}}>SEJA SEMPRE ORIGINAL</h1>
                            <p>NOVOS ITENS AQUI</p>
                            <div>
                                <Link to="/produtos">
                                    <button className="btn btn-primary">COMPRAR</button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>        
            </section>
        )
    }
}

export default PasBanner
