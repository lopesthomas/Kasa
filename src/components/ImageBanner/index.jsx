import '../../assets/styles/imageBanner.scss'



function ImageBanner({srcImage, titreBanner}) {
    return (<div className='bcktop-container'>
        <img src={srcImage} alt='' className='bcktop-img'></img>
        <h1>{titreBanner}</h1>
    </div>)
}

export default ImageBanner