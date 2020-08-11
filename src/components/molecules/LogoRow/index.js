import './style.scss';
import Image from '../../atoms/Image';

const LogoRow = props => {
    const logos = props.logos

    return (
        <div className="LogoRow">
            {
                logos.map(logo => (
                    <div key={"colFor " + logo.alt} className="col one-of-two">
                        <Image
                            type="logo" 
                            alt={logo.alt} 
                            src={logo.src} 
                            />
                    </div>
                ))
            }
        </div>
    )
}

export default LogoRow