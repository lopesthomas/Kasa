import Card from '../../components/Card'
import '../../assets/styles/style.scss'
import ImageBanner from '../../components/ImageBanner'
import bcktop1 from '../../assets/bcktop1.png'
import { useEffect } from 'react'
import data from '../../data/logements.json'



function Home() {
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
                <div className='cards-container'>
                    {data.map((item, i) => (
                        <Card key={i} id={item.id} cover={item.cover} tags={item.tags} title={item.title}/>
                    ))}
                </div>
                
            </div>
        </div>)
    
}

export default Home