import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <Link data-testid="main-link" to={'/'}>
                Main
            </Link>
            <Link data-testid="about-link" to={'/about'}>
                About
            </Link>
        </div>
    );
};
