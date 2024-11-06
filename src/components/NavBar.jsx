import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">
                <img id="pursuit-logo" src="assets/pursuit.png"/>
            </Link>
        </div>
    );
};

export default NavBar;