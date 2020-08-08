import './style.scss'
import Text from '../../atoms/Text'

const TextPP = props => {

    return (
        <div className="TextPP">
            <Text type="strong">{props.strongText}</Text>
            <Text type="p">{props.pText}</Text>
        </div>
    )
} 

export default TextPP