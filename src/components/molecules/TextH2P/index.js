import './style.scss'
import Text from '../../atoms/Text'

const TextH2P = props => {

    return (
        <div className="TextH2P">
            <Text type="h2">{props.h2Text}</Text>
            <Text type="p">{props.pText}</Text>
        </div>
    )
} 

export default TextH2P