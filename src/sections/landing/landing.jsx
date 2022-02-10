import React from 'react';
import {ReactComponent as Line} from '../../assets/dashed-line.svg'
import {ReactComponent as Banks} from '../../assets/banks.svg'
import {ReactComponent as Fintech} from '../../assets/fintech.svg'
import {ReactComponent as Aggregators} from '../../assets/aggregators.svg'
import {ReactComponent as Mmo} from '../../assets/mmo.svg'
import FeatherIcon from 'feather-icons-react'

import LandingImage from '../../assets/128.png'

import './landing.scss'

const Landing = () => {
    return (

            <div className="landing-container">
            
                <div className="contentArea">

                    <div className="headingText">
                        
                        <h1>Find cash nearby,{<br></br>} Send money; to {<br></br>}  <span style = {{color : '#003ad6'}}>anyone,</span> <span style = {{color : '#003ad6'}}>anywhere.</span></h1>

                        <h1 className="size768">Find cash nearby,Send money; to <span style = {{color : '#003ad6'}}>anyone,</span> <span style = {{color : '#003ad6'}}>anywhere.</span></h1>


                        <p>Feather enables you withdraw cash from users or agents nearby: you can also make payments to your favorite vendors. It's easy, it's quick, it's safe.</p>

                        <p className="size425"> Feather enables you withdraw cash from users or agents nearby: you can also make payments to your favorite vendors. It's easy, it's quick, it's safe.</p>

                    </div>

                    {/* <div className="powered">
                        
                        <div className="lineName">
                            <Line className = 'show'/>
                            <div className="textPower">Who needs this</div>
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

                    </div>  */}

                </div>


                <a className="arrowLead" href = '#features'>
                    <FeatherIcon icon = 'arrow-down' className = 'leader-arrow' />
                </a>

                <div className="landingImage">

                
                    <img src={LandingImage} alt="gironet-landing" />

                    <div className="animfile">

                        <lottie-player src="https://assets7.lottiefiles.com/datafiles/B1zOc97lUJINcA2/data.json" mode="bounce" background="transparent"  speed="1"  style={{width: '900px', height: '900px'}}  loop  autoplay></lottie-player>

                    </div>


                </div>


            </div>
    );
}

export default Landing;
