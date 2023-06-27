import logoo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <div className='header'>
        <Link to="/">
            <img src={logoo} alt="Logo" />
        </Link>
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
        </div>
    </div>)
}

export default Header