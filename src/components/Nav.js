import React from 'react';

function Nav() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="/images/logo.jpg" alt="logo" />
                        </div>
                    </ul>
                    <ul className="navbar__right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
