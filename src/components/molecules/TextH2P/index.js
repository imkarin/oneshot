import Text from '../../atoms/Text'
import './style.scss'

const TextH2P = props => {

    return (
        <div className="TextH2P">
            { props.h2Text
            ? <Text type="h2">{props.h2Text}</Text>
            : (null) }
            
            { props.strongText
            ? <Text type="strong">{props.strongText}</Text>
            : (null) }

            { props.pText
            ? <Text type="p">{props.pText}</Text>
            : (null) }
        </div>
    )
} 

export default TextH2P