import './style.css'

import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

const backgroundColor = { 
    backgroundImage: `url(https://pablovaz.files.wordpress.com/2014/04/2dfa8-dsc_9884_1.png)`, 
    backgroundSize: 'cover'
}

export class PasBanner extends Component {
    render() {
        return (
            <section className="container pas__banner_background" style={backgroundColor}>
                <div className="row">
                    <div className="col-md-12 pas__banner_container">

                        {/* <div className="pas__banner_content">
                            <h1 style={{fontSize: '80px'}}>SEJA SEMPRE ORIGINAL</h1>
                            <p>NOVOS ITENS AQUI</p>
                            <div>
                                <Link to="/produtos">
                                    <button className="btn btn-primary">COMPRAR</button>
                                </Link>
                            </div>
                        </div> */}
                        
                    </div>
                </div>        
            </section>
        )
    }
}

export default PasBanner
