import './style.scss';
import Link from 'next/link';

const Anchor = props => {
    return (
        <Link href={props.href} className="Anchor">
            <a>
                {props.children}
            </a>
        </Link>
    )
}

export default Anchor