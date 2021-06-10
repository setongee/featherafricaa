import React from 'react';
import NavBar from '../../components/TitleBar/NavBar'
import {ReactComponent as Line} from '../../assets/dashed-line.svg'
import {ReactComponent as Banks} from '../../assets/banks.svg'
import {ReactComponent as Fintech} from '../../assets/fintech.svg'
import {ReactComponent as Aggregators} from '../../assets/aggregators.svg'
import {ReactComponent as Mmo} from '../../assets/mmo.svg'
import FeatherIcon from 'feather-icons-react';


import LandingImage from '../../assets/gironet-landing-image.png'

import './landing.scss'

const Landing = () => {
    return (
        <div>

            <NavBar/>

            <div className="landing-container">
            
                <div className="contentArea">

                    <div className="headingText">
                        <h1>send money {<br></br>} across fintechs {<br></br>} from <span style = {{color : '#6c00ff'}}>one</span> <span style = {{color : '#5001bc'}}>api</span>.</h1>
                        <p>We have created for you a payments ecosystem that enables emerging and existing financial technologies to perform transactions among themselves with ease.</p>
                    </div>

                    <div className="powered">
                        
                        <div className="lineName">
                            <Line className = 'dashed-line showMax'/>
                            <div className="textPower">Powered for : </div>
                        </div>

                        <div className="checkPlan">

                                <div className="power_icons">
                                    <Banks className = 'icon'/>
                                    <p>Banks</p>
                                </div>

                                <div className="power_icons">
                                    <Fintech className = 'icon'/>
                                    <p>Fintechs</p>
                                </div>

                                <div className="power_icons">
                                    <Mmo className = 'icon'/>
                                    <p>MMOs</p>
                                </div>

                                <div className="power_icons">
                                    <Aggregators className = 'icon'/>
                                    <p>Aggregators</p>
                                </div>

                        </div>

                        <Line className = 'show'/>

                    </div> 

                </div>

                <div className="landingImage">
                    <img src={LandingImage} alt="gironet-landing" />
                </div>

                <div className="arrowLead">
                    <FeatherIcon icon = 'arrow-down' className = 'leader-arrow' />
                </div>


            </div>


        </div>
    );
}

export default Landing;
