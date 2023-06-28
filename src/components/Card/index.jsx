import data from '../../data/logements.json'
import { Link } from 'react-router-dom'
import '../../assets/style.scss'

function Card() {

    return (
    <div className='cards-container'>
        {data.map((item, i) => (
            <Link key={i} to={`/location/${item.id}`}>                   
                <div id={item.id} className='card'>
                    <img className='card-img' src={item.cover} alt={item.tags}></img>
                    <div className='card-cover'></div>
                    <h2 className='card-title'>{item.title}</h2>
                </div>                    
            </Link>
            
            ))}
    </div>)
}

export default Card