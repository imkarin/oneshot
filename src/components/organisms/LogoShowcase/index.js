import './style.scss'
import Image from '../../atoms/Image'
import LogoRow from '../../molecules/LogoRow'

const LogoShowcase = props => {

    return (
        <LogoShowcase className="LogoShowcase">
            <Image type="decoration" src="#" alt="Sparkles" />
            <LogoRow logos={props.logos} />
        </LogoShowcase>
    )
}

export default LogoShowcase