import React, { Component } from 'react'
import './style.css'

export class PasFooter extends Component {
    render() {
        return (
            <>
                <footer className="container-fluid pas__footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 pas__footer-content">
                                <div className="text-center">
                                    item
                                </div>
                            </div>
                            <div className="col-md-2 pas__footer-content">
                                <div className="text-center">
                                    item
                                </div>
                            </div>
                            <div className="col-md-2 pas__footer-content"></div>
                            <div className="col-md-6 pas__footer-content">
                                <div className="text-center">
                                    item
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="container-fluid pas__footer-empresa-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pas__footer-empresa-content">
                                <div className="text-center">empresa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PasFooter
