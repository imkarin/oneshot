import './style.scss'
import OneshotLogo from '../../atoms/OneshotLogo'
import LinkBlock from '../../molecules/LinkBlock'
import Anchor from '../../atoms/Anchor'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import { motion } from 'framer-motion'

const Footer = props => {

    return (
        <motion.footer className="Footer" 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }} 
            transition={{ ease: 'easeInOut', duration: 1, delay: .3 }} >
            
            <div className="row">
                    <div className="col one-of-two">
                    <OneshotLogo />

                    <LinkBlock h4Text="KVK" linkText="1234567890" href="#" anchorText="Oneshot" />

                    <div className="socials">
                        <Text type="h4">Socials</Text>

                        <Anchor href="#">
                            <Icon socialMedia src="/images/social-media/facebook-icon.png" alt="#" />
                        </Anchor>

                        <Anchor href="#">
                            <Icon socialMedia src="/images/social-media/twitter-icon.png" alt="#" />
                        </Anchor>

                        <Anchor href="#">
                            <Icon socialMedia src="/images/social-media/linkedin-icon.png" alt="#" />
                        </Anchor>

                        <Anchor href="#">
                            <Icon socialMedia src="/images/social-media/instagram-icon.png" alt="#" />
                        </Anchor>
                    </div>
                </div>

                <div className="col one-of-two">
                    <LinkBlock h4Text="Address" href="https://www.google.com/maps/place/Hoorneslaan+219,+2221+CP+Katwijk+aan+Zee/@52.2078115,4.4129041,17z/data=!4m5!3m4!1s0x47c5bf596d537fa7:0x14d0082ed0110953!8m2!3d52.2078073!4d4.4144015" linkText="Hoorneslaan 219" />

                    <LinkBlock h4Text="Email" href="https://hello@oneshot.design" linkText="hello@oneshot.design" />

                    <LinkBlock h4Text="Phone" href="#" linkText="06 39 81 36 29" />
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer