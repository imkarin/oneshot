import './style.scss'
import IntroText from '../../molecules/IntroText'
import Image from '../../atoms/Image'

const Header = props => {

    return (
        <header className="Header">
            <div className="col one-of-two">
                <IntroText 
                h1Text={props.h1Text} 
                pText={props.pText} 
                linkText={props.linkText} 
                linkSrc={props.linkSrc}/>
            </div>

            <div className="col one-of-two">
                <Image type="headerIllustration" src={props.imgSrc} alt={props.imgAlt} />
            </div>
        </header>
    )
}

export default Header