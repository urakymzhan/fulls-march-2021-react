import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
        </nav>
    )
}