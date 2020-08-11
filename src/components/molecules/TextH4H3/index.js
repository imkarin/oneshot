import './style.scss'
import Text from '../../atoms/Text'

const TextH4H3 = props => {

    return (
        <div className="TextH4H3">
            { props.h4Text
            ? <Text type="h4">{props.h4Text}</Text>
            : (null) }

            { props.h3Text
            ? <Text type="h3">{props.h3Text}</Text>
            : (null) }
        </div>
    )
} 

export default TextH4H3