import './style.scss'

const Text = props => {
    // determine if it's h1, h2, h3, h4, p, span, strong...
    const Type = props.type;

    return (
        <Type className="Text">{props.children}</Type>
    )
}

export default Text