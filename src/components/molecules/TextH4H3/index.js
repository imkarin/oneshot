import './style.scss'
import Text from '../../atoms/Text'

const TextH4H3 = props => {

    return (
        <div className="TextH4H3">
            <Text type="h4">{props.h4Text}</Text>
            <Text type="h3">{props.h3Text}</Text>
        </div>
    )
} 

export default TextH4H3