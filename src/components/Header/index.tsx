import React from 'react';
// import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header className="main-header">
        {/* <Logo /> */}
        <Link to="/">
            <div className="logo-text">
                <span className="logo-text-1">Case FullStack </span>
                <span className="logo-text-2">AlfaERP </span>
            </div>
        </Link>
    </header>
);

export default Header;
