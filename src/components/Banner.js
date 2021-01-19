import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaLinkedin, FaPlay } from 'react-icons/fa';

function Banner () {

    const [state] = React.useState({
        title: 'I am Wanderson Timóteo', 
        text: 'I,m Wanderson, professional web developer whith long time experience in the field.',
        image: '/images/banner.svg'
    });
    return (
        <header className="header" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <a href="https://github.com/Wanderson-A-Timoteo" target="_blank"> <FaGithub /> </a> 
                                    </li>
                                    <li>
                                    <a href="https://www.facebook.com/wanderson.a.timoteo" target="_blank"> <FaFacebookF /> </a> 
                                       
                                    </li>
                                    <li>
                                    <a href="https://www.instagram.com/wanderson_a_timoteo/" target="_blank"> <FaInstagram /> </a>
                                    </li>
                                    <li>
                                    <a href="https://twitter.com/WandersonAT" target="_blank"> <FaTwitter /> </a>
                                    </li>
                                    <li>
                                    <a href="https://t.me/WandersonTimoteo" target="_blank"> <FaTelegram /> </a>
                                    </li>
                                    <li>
                                    <a href="https://api.whatsapp.com/send?phone=55065992925286" target="_blank"> <FaWhatsapp /> </a>
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com/in/wanderson-a-timoteo/" target="_blank"> <FaLinkedin /> </a>
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
                        <img src={state.image} alt="programming" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
