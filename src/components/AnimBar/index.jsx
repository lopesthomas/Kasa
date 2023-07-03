import '../../assets/styles/animBar.scss'
import arrow from '../../assets/arrow_bar.svg'

function AnimBar({titreBar, ContenuBar}) {
    return (
        <div className="animbar">
            <button className="animbar-title">
                <p>{titreBar}</p>
                <img src={arrow} alt=''/>
            </button>
            <div className="animbar-content">
               Contenu: {ContenuBar} 
            </div>
            
        </div>
    )
}

export default AnimBar