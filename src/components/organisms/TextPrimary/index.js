import Button from '../../atoms/Button'
import TextH4H2 from '../../molecules/TextH4H2'
import './style.scss'

const TextPrimary = props => {

    return (
        <article className="TextPrimary">
            <TextH4H2 h4Text={props.h4Text} h2Text={props.h2Text} />
            <Button href={props.buttonHref}>{props.buttonText}</Button>
        </article>
    )
}

export default TextPrimary