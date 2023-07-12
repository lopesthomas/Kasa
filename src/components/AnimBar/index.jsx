import '../../assets/styles/animBar.scss'
import arrow from '../../assets/arrow_bar.svg'
import { useState } from 'react'

function AnimBar({titreBar, ContenuBar}) {
    const [isOpen, setOpen] = useState(false);

    function openClose(){
        if(isOpen === true){
            setOpen(false)
            
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="animbar">
            <button className={`animbar-title ${isOpen ? 'active' : ''}`} onClick={openClose}>
                <p>{titreBar}</p>
                <img src={arrow} alt=''/>


                
            </button> 
            {/* { isOpen ?
            (<div className="animbar-content">
               Contenu: {ContenuBar} 
            </div>) : null} */}
            <div className={`animbar-content ${isOpen ? 'active' : ''}`}>
               {ContenuBar}
            </div>
            
        </div>
    )
}

export default AnimBar