import './style.scss'
import TextH2P from '../../molecules/TextH4H2'
import Button from '../../atoms/Button'

const TextSecondary = props => {

    return (
        <article className="TextSecondary">
            <TextH2P h2Text={props.h2Text} pText={props.pText} />
            <Button href={props.buttonHref}>{props.buttonText}</Button>
        </article>
    )
}

export default TextSecondary