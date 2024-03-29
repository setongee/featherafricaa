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

                <a href = "/" className="logo"><img src={Logo} alt="" /></a>

                <div className="nav-links">
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Use cases</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=feather.peer">Download App</a></li>
                    {/* <li><a href="/giveaway">Giveaway</a></li> */}
                    <li><a href="/privacy">Privacy</a></li>
                </div>

                <div className="burger">

                    <FeatherIcon icon = 'menu' onClick = {() => {setBurgerState(!burgerOpen);}}/>

                    <div className = {`burger_nav ${burgerOpen ? 'burger_nav_open' : ''}`} >
                        
                        <div className="nav-links-burger">
                            <li><a href="/" onClick = {() => setBurgerState(false)} >Features</a></li>
                            <li><a href="/">Use cases</a></li>
                            <li><a href="/" onClick = {() => setBurgerState(false)} >Download App</a></li>
                            {/* <li><a href="/giveaway"  onClick = {() => setBurgerState(false)}>Giveaway</a></li> */}
                            <li><a href="/privacy" onClick = {() => setBurgerState(false)} >Privacy</a></li>
                        </div>

                    </div>

                </div>

            </div>

            <Line className = 'dashed-line'/>

            

        </div>

    );
}

export default NavBar;
