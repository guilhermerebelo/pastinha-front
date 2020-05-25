import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import SocialIcons from '../social-icons'
import './style.css'

const MENU_OPTIONS = [
    {
        key: 'HOME',
        description: 'Home',
        router: ''
    },
    {
        key: 'LOJA',
        description: 'Loja',
        router: 'produtos'
    },
    {
        key: 'SOBRE',
        description: 'Sobre',
        router: 'sobre'
    },
    {
        key: 'CONTATO',
        description: 'Contato',
        router: 'contato'
    },
];

export function PasNavBar(){
    const menuOptions = MENU_OPTIONS;

    return (
        <nav className="container pas__header-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pas__header-content">
                        <div>
                            <Link to="">
                                <img style={{height: '120px'}} src="https://www.freepnglogos.com/uploads/vans-logo-png/vans-hd-photo-logo-9.png" alt=""/>
                            </Link>
                        </div>
                        <div className="position-relative">
                            <Menu right>
                                {menuOptions.map((item, i) =>
                                    <li key={i}>
                                        <Link to={`/${item.router}`}>
                                            <span>{item.description}</span>
                                        </Link>
                                    </li>
                                )}
                                <SocialIcons style={{bottom: '50px', position: 'absolute'}}/>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>        
        </nav>
    )
}

export default PasNavBar
