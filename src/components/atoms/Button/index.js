import './style.scss';
import Link from 'next/link';

const Button = props => {
    return (
        <Link href={props.href} className="Button">
            <a>
                {props.children}
            </a>
        </Link>
    )
}

export default Button