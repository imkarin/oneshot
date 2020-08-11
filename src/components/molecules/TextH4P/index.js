import './style.scss'
import Text from '../../atoms/Text'

const TextH4P = props => {

    return (
        <div className="TextH4P">
            { props.h4Text
            ? <Text type="h4">{props.h4Text}</Text>
            : (null) }

            { props.pText
            ? <Text type="p">{props.pText}</Text>
            : (null) }
        </div>
    )
} 

export default TextH4P