import './style.scss'
import IntroText from '../../molecules/IntroText'
import SVG from '../../atoms/SVG'
import Image from '../../atoms/Image'

const Header = props => {
    return (
        <header className="Header">
            <IntroText 
            h1Text={props.h1Text} 
            pText={props.pText} 
            linkText={props.linkText} 
            linkSrc={props.linkSrc}/>

            {props.homePage
            ? <SVG />
             : <Image type="headerIllustration" src={props.imgSrc} alt={props.imgAlt} />
            }
        </header>
    )
}

export default Header