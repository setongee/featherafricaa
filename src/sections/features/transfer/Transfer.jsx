import React from 'react';
import './transfer.scss'
import FeatherIcon from 'feather-icons-react'
import {ReactComponent as Line} from '../../../assets/dashed-line.svg'

const Transfer = ( { tag, icon, color, header, header2, subtitle, image, position, tag2} ) => {

    return (

        <div className="features_container">
            
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

export default Transfer;
