import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube, FaWhatsapp } from 'react-icons/fa'
// import { Container } from './styles';

export function SocialIcons(param) {
    const { style, className } = param;
    
    return (
        <div style={style} className={className}>
            <FaFacebookF style={{fontSize: '25px', marginRight: '15px'}}/>
            <FaInstagram style={{fontSize: '25px', marginRight: '15px'}}/>
            <FaPinterest style={{fontSize: '25px', marginRight: '15px'}}/>
            <FaYoutube style={{fontSize: '25px', marginRight: '15px'}}/>
            <FaWhatsapp style={{fontSize: '25px', marginRight: '15px'}}/>
        </div>
    );
}

export default SocialIcons;