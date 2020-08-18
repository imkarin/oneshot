import Anchor from '../../atoms/Anchor'
import Text from '../../atoms/Text'
import './style.scss'

const IntroText = props => {

    return (
        <div className="IntroText">
            <Text type="h1">{props.h1Text}</Text>
            <Text type="p">{props.pText}</Text>
            <Anchor href={props.linkSrc}>{props.linkText}</Anchor>
        </div>
    )
}

export default IntroText