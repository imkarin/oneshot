import './style.scss'
import Image from '../../atoms/Image'

const LogoRow = props => {
    const logos = {props.logos}

    return (
        <div className="LogoRow">
            {
                logos.map(logo => (
                    <Image 
                        key={logo.alt}
                        type="logo" 
                        alt={logo.alt} 
                        src={logo.src} 
                    />
                ))
            }
        </div>
    )
}

export default LogoRow