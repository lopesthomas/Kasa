import data from '../../data/logements.json'
import bckred from '../../assets/bckred.png'

function Card() {
    return (
    <div>
        {data.map((item, i) => (
            <div key={i}>                   
            <div id={item.id} className='card'><img src={item.cover} alt={item.tags}></img><div className='title-card'>{item.title}</div></div>                    
            </div>
            ))}
    </div>)
}

export default Card