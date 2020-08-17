import './style.scss'
import IntroText from '../../molecules/IntroText'
import SVG from '../../atoms/SVG'
import Image from '../../atoms/Image'
import { motion } from 'framer-motion'

const Header = props => {
    return (
        <motion.header className='Header' 
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 0 }} 
            transition={{ ease: 'easeInOut', duration: 1, delay: .3 }} >

            <IntroText 
            h1Text={props.h1Text} 
            pText={props.pText} 
            linkText={props.linkText} 
            linkSrc={props.linkSrc}/>

            {props.homePage
            ? <SVG />
            : <Image type='headerIllustration' src={props.imgSrc} alt={props.imgAlt} />
            }
        </motion.header>
    )
}

export default Header