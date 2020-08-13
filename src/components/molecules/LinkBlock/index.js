import './style.scss'
import Text from '../../atoms/Text'
import Anchor from '../../atoms/Anchor'

const LinkBlock = props => {

    return (
        <div className="LinkBlock">
            <Text type="h4">{props.h4Text}</Text>
            <a href={props.href}>{props.linkText}</a>
        </div>
    )
}

export default LinkBlock