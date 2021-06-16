import React from 'react';
import Tube from '../../assets/gironet-pipe.png'

const style = {
    width : '450px',
    position : 'absolute',
    marginTop : '0px',
    top : '-25%',
    left : '120px',
    animation : 'setonji_custom_bounce 3s ease-in-out infinite'
}

const ImgStyle = {
    width : '100%'
}


const PipelineTube = () => {
    return (
        <div className = "pop" style = {style} >
             <img className = 'pipeline' src={Tube} style = {ImgStyle} alt="gironet pipeline" />
        </div>
    );
}

export default PipelineTube;
