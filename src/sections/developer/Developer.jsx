import React from 'react';
import './developer.scss'
import Console from '../../assets/console2.png'

const Developer = () => {

    return (

        <div className="developer">

            <div className="developer_content">

                <h4>Built for developer</h4>
                <h1>Built with 100% {<br></br>} easy-to-use api {<br></br>} integration.</h1>
                <div className="sub_text">We agonise over the right abstractions so your teams don’t need to stitch together disparate systems or spend months integrating payments functionality.</div>

            </div>

            <div className="dev_console"><img src={Console} alt="gironet console for developers" /></div>

        </div>

    );

}

export default Developer;
