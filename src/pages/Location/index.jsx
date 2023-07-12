import data from '../../data/logements.json'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider';
import { useState } from 'react';
import starActive from '../../assets/star-active.svg'
import starInactive from '../../assets/star-inactive.svg'
import AnimBar from '../../components/AnimBar';

function Location() {
    const stars = []
    const { idLink } = useParams()

      // Recherche l'annonce avec le même ID
    const annonce = data.find(annonce => annonce.id === idLink);
    const score = annonce.rating
        // Vérifie si l'annonce a été trouvée
    if (!annonce) {
        return <p>Annonce non trouvée</p>;
    }

    // function addStars(){
        for(let i = 0; i < 5; i++){
            if(i < score){
                stars.push(<img key={i} src={starActive} alt="Etoile d'évaluation"/>)
            }
            else{
                stars.push(<img key={i} src={starInactive} alt="Etoile d'évaluation inactive" />)
            }
        }
    // }
    
    return (
        <div className='location'>
            <Slider/>
            <div className='infos-container'>
                <div className='info-location'>
                    <h1 className='titre'>{annonce.title}</h1>
                    <p className='adresse'>{annonce.location}</p>
                    <div className='tags-container'>
                        {annonce.tags.map((item, id) => <p className='tag' key={id} >{item}</p> )}
                    </div> 
                </div>
                <div className='info-hote'>
                    <div className='hote-container'>
                        <p className='nom-hote'>{annonce.host.name}</p>
                        <img className='photo-hote' alt={annonce.host.name} src={annonce.host.picture}/>
                    </div>
                    
                    <div className='stars'>{stars}</div>
                </div>
            </div>
            <div className='bars'>
                <AnimBar titreBar="Description" ContenuBar={annonce.description}/>
                <AnimBar titreBar="Equipements" ContenuBar={annonce.equipments.map((item, id) => <text style={{whiteSpace: 'break-spaces'}} > {item}{"\n"}</text>)}/>
            </div>
        </div>
        );
   
}

export default Location