import React from 'react';
import './info.scss'
import Pipe from '../../assets/gironet-pipe.png'
import {ReactComponent as Line} from '../../assets/dashed-line.svg'

const Info = () => {

    return (

        <div className="information">

            <h4>Your technology + gironet API = </h4>
            <h1>unlimited possibilities</h1>

            <p>Implement any or all of gironet’s products & services with just a few lines of code via our plug-and-play technology with one API</p>
            
            <img className = 'pipeline' src={Pipe} alt="gironet pipeline" />

            <div className="cmd_btn">Request Demo</div>

            <Line className = 'giro-line' />

        </div>
    );

}

export default Info;
