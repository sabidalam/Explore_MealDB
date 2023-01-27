import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link className='me-3 text-decoration-none' to='/'>Meal</Link>
        </nav>
    );
};

export default Header;