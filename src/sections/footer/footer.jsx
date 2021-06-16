import React from 'react';
import Logo from '../../assets/brandLogo/gironet-logo.png'
import './footer.scss'
import {ReactComponent as Line} from '../../assets/dashed-line.svg'

const Footer = () => {

    const footerStyle = {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        padding : '30px 250px',
        boxSizing : 'border-box',
        position : 'relative'
    }

    const logo = {
        width : '130px',
        overflow : 'hidden'
    }

    const copy = {
        fontSize : '14px',
        color : '#707070'
    }


    return (

        <div className="footer" style = {footerStyle} >

            <Line className = 'line-footer' />

            <div className="logo_giro">
                <img src={Logo} alt="gironet logo" style = {logo} />
            </div>
            <div className="copyright" style = {copy} >
                @2021. Giro Cloud Technologies. All rights reserved
            </div>

        </div>

    );
}

export default Footer;
