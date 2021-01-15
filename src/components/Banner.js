import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaLinkedin, FaPlay } from 'react-icons/fa';

function Banner () {

    const [state] = React.useState({
        title: 'I am Wanderson Timóteo', 
        text: 'I,m Wanderson, professional web developer whith long time experience in the field.',
        image: '/images/my-photo.jpg'
    });
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaGithub />
                                    </li>
                                    <li>
                                        <FaFacebookF />
                                    </li>
                                    <li>
                                        <FaInstagram />
                                    </li>
                                    <li>
                                        <FaTwitter />
                                    </li>
                                    <li>
                                        <FaTelegram />
                                    </li>
                                    <li>
                                        <FaWhatsapp />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                </ul>
                                <h1> {state.title} </h1>
                                <p> {state.text} </p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">
                                        My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="" className="btn btn-smart">
                                        <FaPlay className="play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                        <img src={state.image} alt="Photo Wanderson Timóteo" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
