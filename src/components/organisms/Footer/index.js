import './style.scss'
import OneshotLogo from '../../atoms/OneshotLogo'
import LinkBlock from '../../molecules/LinkBlock'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'

const Footer = props => {

    return (
        <footer className="Footer">
            <div className="col one-of-two">
                <OneshotLogo />

                <LinkBlock h4Text="KVK" href="#" anchorText="Oneshot" />

                <div className="socials">
                    <Text type="h4">Socials</Text>

                    <Anchor href="#">
                        <Icon socialMedia src="#" alt="#" />
                    </Anchor>

                    <Anchor href="#">
                        <Icon socialMedia src="#" alt="#" />
                    </Anchor>

                    <Anchor href="#">
                        <Icon socialMedia src="#" alt="#" />
                    </Anchor>

                    <Anchor href="#">
                        <Icon socialMedia src="#" alt="#" />
                    </Anchor>
                </div>
            </div>

            <div className="col one-of-two">
                <LinkBlock h4Text="Address" href="#" anchorText="A123" />

                <LinkBlock h4Text="Email" href="#" anchorText="A@a.a" />

                <LinkBlock h4Text="Phone" href="#" anchorText="123" />
            </div>
        </footer>
    )
}

export default Footer