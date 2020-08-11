import './style.scss'
import Text from '../../atoms/Text'

const TextPP = props => {

    return (
        <div className="TextPP">
            { props.strongText
            ? <Text type="strong">{props.strongText}</Text>
            : (null) }
            
            { props.pText
            ? <Text type="p">{props.pText}</Text>
            : (null) }
        </div>
    )
} 

export default TextPP