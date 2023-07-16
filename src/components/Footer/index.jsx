import flogo from '../../assets/flogo.png'
import '../../assets/styles/footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <img src={flogo} alt="Logo Footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer