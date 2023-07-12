import logoo from '../../assets/logo.png'
import { Link, useLocation, useParams } from 'react-router-dom'
import '../../assets/styles/header.scss'

function Header() {
    const location = useLocation()


    return (
    <div className='header'>
        <Link to="/">
            <img src={logoo} alt="Logo" />
        </Link>
        <div className='liens'>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Accueil</Link>
            <Link className={location.pathname === "/apropos" ? "active" : ""} to="/apropos">A Propos</Link>
        </div>
    </div>)
}

export default Header