import './style.scss'
import Image from '../../atoms/Image'
import TextH4H3 from '../../molecules/TextH4H3'

const CaseCard = props => {

    return (
        <div className="CaseCard">
            <Image type="cardPreview" src={props.imgSrc} alt={props.imgAlt} />
            <TextH4H3 h4Text={props.h4Text} h3Text={props.h3Text} />
        </div>
    )
}

export default CaseCard