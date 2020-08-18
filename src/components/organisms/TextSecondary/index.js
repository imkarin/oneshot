import './style.scss'
import TextH2P from '../../molecules/TextH2P'
import Button from '../../atoms/Button'

const TextSecondary = props => {

    return (
        <article className="TextSecondary">
            <TextH2P h2Text={props.h2Text} 
            pText={props.pText} 
            strongText={props.strongText} />

            {props.buttonHref
                ? <Button href={props.buttonHref}>{props.buttonText}</Button>
                : null
            }
        </article>
    )
}

export default TextSecondary