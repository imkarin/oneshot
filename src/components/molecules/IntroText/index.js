import './style.scss'
import Text from '../../atoms/Text'

const IntroText = props => {

    return (
        <div className="IntroText">
            <Text type="h1">{props.h1Text}</Text>
            <Text type="p">{props.pText}</Text>
            <Text type="strong">{props.strongText}</Text>
        </div>
    )
}

export default IntroText