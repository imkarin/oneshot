import './style.scss'
import Text from '../../atoms/Text'

const TextH4H2 = props => {

    return (
        <div className="TextH4H2">
            { props.h4Text
            ? <Text type="h4">{props.h4Text}</Text>
            : (null) }

            { props.h2Text
            ? <Text type="h2">{props.h2Text}</Text>
            : (null) }
        </div>
    )
} 

export default TextH4H2