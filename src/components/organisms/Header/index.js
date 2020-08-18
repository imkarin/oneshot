import { motion } from 'framer-motion'
import Image from '../../atoms/Image'
import IntroText from '../../molecules/IntroText'
import SVG from '../../atoms/SVG'
import './style.scss'

const Header = props => {
    return (
        <motion.header className='Header' 
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 20 }} 
            transition={{ ease: 'easeInOut', duration: 1, delay: .3 }} >

            <IntroText 
            h1Text={props.intro.h1Text} 
            pText={props.intro.pText} 
            linkText={props.intro.linkText} 
            linkSrc={props.intro.linkSrc}/>

            {props.intro.homePage
            ? <SVG />
            : <Image type='headerIllustration' src={props.imgSrc} alt={props.imgAlt} />
            }
        </motion.header>
    )
}

export default Header