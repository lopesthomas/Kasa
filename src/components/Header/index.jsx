import logoo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../assets/styles/header.scss'

function Header() {
    return (
    <div className='header'>
        <Link to="/">
            <img src={logoo} alt="Logo" />
        </Link>
        <div className='liens'>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
        </div>
    </div>)
}

export default Header