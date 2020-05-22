import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './style.css'

export class PasNavBar extends Component {

    render() {
        return (
            <nav className="container pas__header-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="pas__header-content">
                            <div>
                                <img style={{height: '120px'}} src="https://www.freepnglogos.com/uploads/vans-logo-png/vans-hd-photo-logo-9.png" alt=""/>
                            </div>
                            <div className="position-relative">
                                <Menu right>
                                    <a id="home" className="menu-item" href="/">Home</a>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>        
            </nav>
        )
    }
}

export default PasNavBar
