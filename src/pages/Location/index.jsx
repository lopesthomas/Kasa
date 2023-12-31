import data from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider';
import { useEffect } from 'react';
import starActive from '../../assets/star-active.svg'
import starInactive from '../../assets/star-inactive.svg'
import AnimBar from '../../components/AnimBar';
import Error from '../../components/Error';
import '../../assets/styles/locationPage.scss'
import Tag from '../../components/Tag';

function Location() {
    useEffect(() => {
        document.title = "Kasa - Locations"

        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        if(annonce){metaDescription.content = annonce.title;}
        
        document.head.appendChild(metaDescription);

        return () => {
            document.head.removeChild(metaDescription);
        };
    })

    const stars = []
    const { idLink } = useParams()

      // Recherche l'annonce avec le même ID
    const annonce = data.find(annonce => annonce.id === idLink);
    
        // Vérifie si l'annonce a été trouvée
    if (!annonce) {
        return <Error />;
    } else {
        const score = annonce.rating

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
            <Slider pictures={annonce.pictures}/>
            <div className='infos-container'>
                <div className='info-location'>
                    <h1 className='titre'>{annonce.title}</h1>
                    <p className='adresse'>{annonce.location}</p>
                    <div className='tags-container'>
                        {annonce.tags.map((item, id) => <Tag key={id} tag={item}/>)}
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
                <AnimBar titreBar="Equipements" ContenuBar={annonce.equipments.map((item, id) => `${item} \n`)}/>
            </div>
        </div>
        );
    }
}

export default Location