import React, { Component } from 'react'
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import './style.css'

const MENU = [
    'Loja',
    'Revendedores',
    'Blog',
    'Quem somos',
    'Contato'
];

const INFO = [
    'FAQ',
    'Envio e devoluções',
    'Política da loja',
    'Métodos de pagamento '
]

export class PasFooter extends Component {
    render() {
        return (
            <>
                <footer className="container-fluid pas__footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 pas__footer-content">
                                <ul className="text-left">
                                    {MENU.map((item, i) =>
                                        <li key={i}>{item}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="col-md-2 pas__footer-content">
                                <ul className="text-left">
                                    {INFO.map((item, i) =>
                                        <li key={i}>{item}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="col-md-2 pas__footer-content"></div>
                            <div className="col-md-6 pas__footer-content">
                                <div>
                                    <FaFacebookF style={{fontSize: '25px', marginRight: '15px'}}/>
                                    <FaInstagram style={{fontSize: '25px', marginRight: '15px'}}/>
                                    <FaPinterest style={{fontSize: '25px', marginRight: '15px'}}/>
                                    <FaYoutube style={{fontSize: '25px', marginRight: '15px'}}/>
                                    <FaWhatsapp style={{fontSize: '25px', marginRight: '15px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="container-fluid pas__footer-empresa-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pas__footer-empresa-content">
                                <div>
                                    ©2023 por Raw.etc. Orgulhosamente criado com Wix.com
                                </div> 
                                <div>
                                    Raw.etc Ltda. - CPF/CNPJ: 12.345.678/0000-01 - Av. Bernardino de Campos, 98 São Paulo, SP 12345-678 - info@meusite.com - Telefone: (11) 3456-7890
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PasFooter
