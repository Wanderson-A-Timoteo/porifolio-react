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
                            <img src="/images/logo.png" alt="Logo de um lobo -  Wanderson Timóteo" />
                        </div>
                    </ul>
                    {state ? (
                    <ul className="navbar__right">
                        <li><AnchorLink href="#home">Início</AnchorLink></li>
                        <li><AnchorLink href="#skills">Habilidades</AnchorLink></li>
                        <li><AnchorLink href="#about">Sobre</AnchorLink></li>
                        <li><AnchorLink href="#services">Projetos</AnchorLink></li>
                        <li><AnchorLink href="#contact">Contatos</AnchorLink></li>
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
