import React, {useState} from 'react';
import Logo from '../../assets/brandLogo/gironet-logo.png'
import {ReactComponent as Line} from '../../assets/dashed-line.svg'
import './navbar.scss'
import FeatherIcon from 'feather-icons-react';

const NavBar = () => {

    const [burgerOpen, setBurgerState] = useState(false)

    return (

        <div className = 'fixed-nav'>
            
            <div className="navigation">

                <div className="logo"><img src={Logo} alt="" /></div>

                <div className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#usecase">Use cases</a></li>
                    <li><a href="#contact">Get in touch</a></li>
                </div>

                <div className="action-btn">Dashboard</div>

                <div className="burger">

                    <FeatherIcon icon = 'menu' onClick = {() => {setBurgerState(!burgerOpen);}}/>

                    <div className = {`burger_nav ${burgerOpen ? 'burger_nav_open' : ''}`} >
                        
                        <div className="nav-links-burger">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#usecase">Use cases</a></li>
                            <li><a href="#contact">Get in touch</a></li>
                        </div>

                        <div className="action-btn-burger">Dashboard</div>

                        <div className="action-btn-burger outline-btn">Request Demo</div>

                    </div>

                </div>

            </div>

            <Line className = 'dashed-line'/>

            

        </div>

    );
}

export default NavBar;
