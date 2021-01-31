import React from 'react';
import { FaAlignJustify } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Nav() {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="/images/logo.png" alt="logomarca Wanderson Timóteo" />
                        </div>
                    </ul>
                    {state ? (
                    <ul className="navbar__right">
                        <li><AnchorLink href="#home">Home</AnchorLink></li>
                        <li><AnchorLink href="#about">About</AnchorLink></li>
                        <li><AnchorLink href="#skills">Skills</AnchorLink></li>
                        <li><AnchorLink href="#projects">Projects</AnchorLink></li>
                        <li><AnchorLink href="#contact">Contacts</AnchorLink></li>
                    </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
             </div>
        </nav>
    );
};

export default Nav;
