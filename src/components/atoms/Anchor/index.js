import './style.scss';
import Link from 'next/link';

const Anchor = props => {
    return (
        <Link href={props.href}>
            <a className="Anchor">
                {props.children}
            </a>
        </Link>
    )
}

export default Anchor