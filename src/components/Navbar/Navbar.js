import { Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../Routing/AppRoutes.js';

const Navbar = () => {
    const links = [
        {
            path: AppRoutes.MAIN,
            label: 'MAIN'
        },
        {
            path: AppRoutes.TODOS,
            label: 'TODOS'
        },
        {
            path: AppRoutes.ALBUMS,
            label: 'ALBUMS'
        },
        {
            path: AppRoutes.COMMENTS,
            label: 'COMMENTS'
        }
    ]
    const {pathname} = useLocation();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: 'lavender',
            height: 40
        }}>
            {links.map((link) => (
                <Link key={link.path} style={{color: link.path === pathname ? 'black' : 'white', textDecoration: 'none'}}
                      to={link.path}>{link.label}</Link>
            ))}
        </div>
    );
};

export default Navbar;