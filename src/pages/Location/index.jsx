import data from '../../data/logements.json'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Location() {
    const { idLink } = useParams()

      // Recherche l'annonce avec le même ID
  const annonce = data.find(annonce => annonce.id === idLink);

  // Vérifie si l'annonce a été trouvée
  if (!annonce) {
    return <p>Annonce non trouvée</p>;
  }

  // Affiche les détails de l'annonce
  return (
    <div>
        {annonce.pictures.map((item, id) => <img key={id} src={item} alt={annonce.titre} /> )}
        
        <div>
            <div>
                <h1>{annonce.title}</h1>
                <p>{annonce.location}</p>
                <div>
                    {annonce.tags.map((item, id) => <p key={id} >{item}</p> )}
                </div> 
            </div>
            <div>
                <div>
                    <p>{annonce.host.name}</p>
                    <img alt={annonce.host.name} src={annonce.host.picture}/>
                </div>
                <p>{annonce.rating}</p>
            </div>
        </div>
        <div>
            <p>Description : {annonce.description}</p>
            <div>
                <p>equipements</p>
                {annonce.equipments.map((item, id) => <p key={id}>{item}</p> )}
            </div>
        </div>
    </div>
    );
   
}

export default Location