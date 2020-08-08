import './style.scss'

const Image = props => {
    // type = headerIllustration, decoration, bigIllustration, smallIllustration, cardPreview, projectHeader, projectSide, projectWide, logo
    const imageType = props.type;
    
    return (
        <img
            className={"Image " + imageType}
            src={props.src} 
            alt={props.alt}
        />
    )
}

export default Image