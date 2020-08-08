import './style.scss'
import Text from '../../atoms/Text'
import Anchor from '../../atoms/Anchor'

const LinkBlock = props => {

    return (
        <div className="LinkBlock">
            <Text type="h4">{props.h4Text}</Text>
            <Anchor href={props.href}>{props.anchorText}</Anchor>
        </div>
    )
}

export default LinkBlock