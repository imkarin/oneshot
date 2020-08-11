import './style.scss';
import Link from 'next/link';

const Button = props => {
    return (
        <Link href={props.href}>
            <a className="Button">
                {props.children}
                <div className="button_background"></div>
            </a>
        </Link>
    )
}

export default Button