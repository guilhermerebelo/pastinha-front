import React from 'react'
import SocialIcons from '../social-icons'
import './style.css'

import { Link, useHistory } from 'react-router-dom'

const MENU = [
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

export function PasFooter() {
    return (
        <>
            <footer className="container-fluid pas__footer-container">
                <div className="container pas__container">
                    <div className="pas__footer-content">
                        <ul className="text-left">
                            {MENU.map((item, i) =>
                                <li key={i}>
                                    <Link to={`/${item.router}`}>
                                        <span>{item.description}</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <SocialIcons />
                    </div>
                </div>
            </footer>

            {/* quebrar em outro componente */}
            <div className="container-fluid pas__footer-empresa-container">
                <div className="container pas__container">
                    <div className="row pas__footer-empresa-content">
                        <div>
                            ©2023 por Raw.etc. Orgulhosamente criado com Wix.com
                        </div> 
                        <div>
                            Raw.etc Ltda. - CPF/CNPJ: 12.345.678/0000-01 - Av. Bernardino de Campos, 98 São Paulo, SP 12345-678 - info@meusite.com - Telefone: (11) 3456-7890
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasFooter
