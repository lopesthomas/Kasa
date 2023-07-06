import AnimBar from "../../components/AnimBar";
import '../../assets/styles/propos.scss'
import bcktop2 from '../../assets/bcktop2.png'
import ImageBanner from "../../components/ImageBanner";

function Propos() {
    return (
          <div className="apropos">
            <ImageBanner srcImage={bcktop2} />
            <div className="apropos-content">
                
                <AnimBar titreBar="Flabilité" ContenuBar="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <AnimBar titreBar="Respect" ContenuBar="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <AnimBar titreBar="Service" ContenuBar="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <AnimBar titreBar="Sécurité" ContenuBar="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
          </div>  

        
    )
}

export default Propos