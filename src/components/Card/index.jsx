import { Link } from 'react-router-dom'
import '../../assets/styles/style.scss'

function Card({id, cover, tags, title}) {

    return (
    <div>
            <Link key={id} to={`/location/${id}`}>                   
                <div id={id} className='card'>
                    <img className='card-img' src={cover} alt={tags}></img>
                    <div className='card-cover'></div>
                    <h2 className='card-title'>{title}</h2>
                </div>                    
            </Link>

    </div>)
}

export default Card