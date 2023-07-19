import React, { useState } from 'react';
import '../../assets/styles/slider.scss'
import leftArrow from '../../assets/VectorLeftMax.svg'
import rightArrow from '../../assets/VectorRightMax.svg'

function Slider({pictures}) {

    const [imageIndex, setImageIndex] = useState(0);
    const currentPicture = pictures[imageIndex];

    function preced() {
        if (imageIndex > 0){
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(pictures.length - 1)
        }
    }

    function suivant() {
        if (imageIndex < pictures.length - 1){
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }

    }

    return (
        <div className='slider'>
            <img src={currentPicture} alt={`Location ph numero:  ${imageIndex + 1}`} className='slider-img'/>
            { 1 !== pictures.length ?
                <div><button className='slider-button-preced' onClick={preced}><img src={leftArrow} alt='Precedent' /></button>
                <button className='slider-button-suiv' onClick={suivant}><img src={rightArrow} alt='Suivant' /></button>
                <p className='slider-positionImage'>{imageIndex + 1}/{pictures.length}</p></div>
                : null
            }
        </div>
    )
}

export default Slider