import './style.scss'
import Text from '../../atoms/Text'

const TextH4P = props => {

    return (
        <div className="TextH4P">
            <Text type="h4">{props.h4Text}</Text>
            <Text type="p">{props.pText}</Text>
        </div>
    )
} 

export default TextH4P