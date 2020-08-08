import './style.scss'
import OneshotLogo from '../../atoms/OneshotLogo'
import Anchor from '../../atoms/Anchor'
import Icon from '../../atoms/Icon'

const Nav = props => {

    return (
        <nav className="nav">
            <OneshotLogo />
            <Anchor href="/werk">Werk</Anchor>
            <Anchor href="/diensten">Diensten</Anchor>
            <Anchor href="/aanpak">Aanpak</Anchor>
            <Anchor href="/contact">Contact</Anchor>
            <Anchor href="#">
                <Icon src="" alt="Darkmode eye icon" />
            </Anchor>
        </nav>
    )
}

export default Nav