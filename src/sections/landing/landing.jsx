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

            <div className="landing-container">
            
                <div className="contentArea">

                    <div className="headingText">
                        <h1>send money {<br></br>} across fintechs {<br></br>} from <span style = {{color : '#6c00ff'}}>one</span> <span style = {{color : '#5001bc'}}>api</span>.</h1>
                        <p>We have created for you a payments ecosystem that enables emerging and existing financial technologies to perform transactions among themselves with ease.</p>
                    </div>

                    <div className="powered">
                        
                        <div className="lineName">
                            <Line className = 'show'/>
                            <div className="textPower">Powered for : </div>
                        </div>

                        <div className="checkPlan">

                                <div className="power_icons">
                                    <Banks className = 'icon' width = '40px'/>
                                    <p>Banks</p>
                                </div>

                                <div className="power_icons">
                                    <Fintech className = 'icon' width = '40px'/>
                                    <p>Fintechs</p>
                                </div>

                                <div className="power_icons">
                                    <Mmo className = 'icon' width = '40px'/>
                                    <p>MMOs</p>
                                </div>

                                <div className="power_icons">
                                    <Aggregators className = 'icon' width = '40px'/>
                                    <p>Aggregators</p>
                                </div>

                        </div>

                        <Line className = 'showMax'/>

                    </div> 

                </div>


                <div className="arrowLead">
                    <FeatherIcon icon = 'arrow-down' className = 'leader-arrow' />
                </div>

                <div className="landingImage">
                    <img src={LandingImage} alt="gironet-landing" />
                </div>


            </div>
    );
}

export default Landing;
