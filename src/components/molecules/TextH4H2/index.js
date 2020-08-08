import './style.scss'
import Text from '../../atoms/Text'

const TextH4H2 = props => {

    return (
        <div className="TextH4H2">
            <Text type="h4">{props.h4Text}</Text>
            <Text type="h2">{props.h2Text}</Text>
        </div>
    )
} 

export default TextH4H2