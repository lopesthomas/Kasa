import Card from '../../components/Card'
import '../../assets/styles/style.scss'
import ImageBanner from '../../components/ImageBanner'
import bcktop1 from '../../assets/bcktop1.png'
import { useEffect } from 'react'



function Home(titre) {
    useEffect(() => {
        document.title = "Kasa - Accueil"

        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Site web de locations immobilières';
        document.head.appendChild(metaDescription);

        return () => {
            document.head.removeChild(metaDescription);
        };
    })
    return (
        <div>
            <ImageBanner srcImage={bcktop1} titreBanner={`${'Chez vous, '} ${"\n"} ${"partout et ailleurs"}`}/>
            <div className='bck-panel'>

                <Card/>
            </div>
        </div>)
    
}

export default Home