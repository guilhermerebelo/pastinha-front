import React, { Component } from 'react'
import './style.css'

export class PasGaleriaHome extends Component {
    render() {
        return (
            <section className="container pas__galeria-home-container">
                <div className="row">

                    {/* produto */}
                    <div className="col-md-3 pas__galeria-home-content">
                        <div className="text-center">
                            item
                        </div>
                    </div>
                    <div className="col-md-3 pas__galeria-home-content">
                        <div className="text-center">
                            item
                        </div>
                    </div>
                    <div className="col-md-3 pas__galeria-home-content">
                        <div className="text-center">
                            item
                        </div>
                    </div>
                    <div className="col-md-3 pas__galeria-home-content">
                        <div className="text-center">
                            item
                        </div>
                    </div>
                </div>

                <div className="pas__galeria-home-btn">
                    <button className="btn btn-block btn-primary">VER TUDO</button>
                </div>
            </section>
        )
    }
}

export default PasGaleriaHome
