import './style.scss'
import OneshotLogo from '../../atoms/OneshotLogo'
import Anchor from '../../atoms/Anchor'
import Icon from '../../atoms/Icon'

const Nav = props => {

    return (
        <nav className="Nav">
            <OneshotLogo />

            <div className="LinksContainer">
                <Anchor href="/werk">Werk</Anchor>
                <Anchor href="/diensten">Diensten</Anchor>
                <Anchor href="/aanpak">Aanpak</Anchor>
                <Anchor href="/contact">Contact</Anchor> 
                <Anchor href="#">
                    <Icon src="/images/icon-eye.png" alt="Darkmode eye icon" />
                </Anchor>
            </div>
        </nav>
    )
}

export default Nav