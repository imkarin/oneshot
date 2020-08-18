import './style.scss'
import OneshotLogo from '../../atoms/OneshotLogo'
import Anchor from '../../atoms/Anchor'
import Icon from '../../atoms/Icon'
import { motion } from 'framer-motion'

const Nav = props => {

    return (
        <motion.nav className="Nav" 
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 0 }} 
            transition={{ ease: 'easeInOut', duration: 1.3, delay: .6 }}>

            <OneshotLogo />

            <div className="LinksContainer">
                <Anchor href="/diensten">Diensten</Anchor>
                <Anchor href="/aanpak">Aanpak</Anchor>
                <Anchor href="#footer">Contact</Anchor> 
                {/* <Anchor href="#">
                    <Icon src="/images/icon-eye.png" alt="Darkmode eye icon" />
                </Anchor> */}
            </div>
        </motion.nav>
    )
}

export default Nav