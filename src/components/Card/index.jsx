import data from '../../data/logements.json'
import { Link } from 'react-router-dom'

function Card() {

    return (
    <div>
        {data.map((item, i) => (
            <Link key={i} to={`/location/${item.id}`}>                   
                <div id={item.id} className='card'><img src={item.cover} alt={item.tags}></img><div className='title-card'>{item.title}</div></div>                    
            </Link>
            
            ))}
    </div>)
}

export default Card