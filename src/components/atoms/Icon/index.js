import './style.scss';

const Icon = props => {
    const socialMedia = props.socialMedia? "SocialMedia" : "";

    return (
        <img
            className={"Icon " + socialMedia}
            src={props.src} 
            alt={props.alt}
        />
    )
}

export default Icon