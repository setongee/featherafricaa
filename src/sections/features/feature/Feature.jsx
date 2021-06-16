import React from 'react';
import './feature.scss'
import FeatherIcon from 'feather-icons-react'
import {ReactComponent as Line} from '../../../assets/dashed-line.svg'

const Feature = ( { tag, icon, color, header, header2, subtitle, image, track, tag2, position} ) => {

    console.log(track);

    return (

        <div className = {`features_container ${track === 3 ? 'last-child-feature' : ''}`} id = 'features' >
            
            <div className="tagArea">{tag2}</div>

            <div className="features_content">

                <div className="content">
                    <div className = 'icon-feather' style = { { backgroundColor : color } } >
                        <FeatherIcon icon = {icon} size = '40' strokeWidth = '1.5' />
                    </div>
                    <h4 className="title">{tag}</h4>
                    <h1>{header}</h1>
                    <h1>{header2}</h1>
                    <div className="subtitle">{subtitle}</div>
                </div>

                <div className="illustration">
                    <img src={image} alt={tag} />
                </div>

                <Line className = 'dash_line' />

            </div>

        </div>

    );
}

export default Feature;
