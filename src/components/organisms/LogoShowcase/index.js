import './style.scss'
import Image from '../../atoms/Image'
import LogoRow from '../../molecules/LogoRow'

const LogoShowcase = props => {

    return (
        <div className="LogoShowcase">
            <Image type="decoration" src="/images/sparkles.png" alt="Sparkles" />
            <LogoRow logos={props.logos} />
        </div>
    )
}

export default LogoShowcase