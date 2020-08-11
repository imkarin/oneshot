import './style.scss'
import Image from '../../atoms/Image'
import TextPP from '../../molecules/TextPP'

const Figure = props => {

    return (
        <div className="Figure">
            <Image type="figure" src={props.imgSrc} alt={props.imgAlt} />
            <TextPP strongText={props.strongText} pText={props.pText} />
        </div>
    )
}

export default Figure