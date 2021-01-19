import React from 'react';
import { FaGithub, FaHtml5, FaJsSquare, FaJava, FaNodeJs, FaPhp, FaDocker, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiMysql } from 'react-icons/si';

function Services() {

    const [header] = React.useState({ 
        mainHeader: "SERVICES", 
        subHeading: "My Services", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex felis, accumsan non\
         nibh a, condimentum blandit erat", 
    });

    const [state] = React.useState([
        { 
            id: 1, 
            icon1: <FaGithub />, 
            heading: 'My Projects', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 2, 
            icon1: <FaReact />, 
            heading: 'React.js', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 3, 
            icon1: <FaNodeJs />, 
            heading: 'Node.js', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 4, 
            icon1: <FaJsSquare />, 
            heading: 'JavaScript', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 5, 
            icon1: <FaDocker />, 
            heading: 'Docker', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 6, 
            icon1: <SiMysql />,
            icon2: <SiPostgresql />, 
            heading: 'MySQL & Postgresql', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 7, 
            icon1: <FaJava />, 
            heading: 'JAVA', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 8, 
            icon1: <FaHtml5 />,
            icon2: <FaCss3Alt/>, 
            heading: 'HTML5 & CSS3', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
        { 
            id: 9, 
            icon1: <FaPhp />, 
            heading: 'PHP', 
            text: 'Proin ut egestas nunc, ut pellentesque arcu. Curabitur congue, justo et mattis porttitor,\
            mauris dui aliquet sapien, sed ultricies turpis massa sed justo. Nunc id commodo risus.' 
        },
    ]);

    return(
        <div className="services" id="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading"> { header.mainHeader } </h3>
                        <h1 className="mainHeader"> { header.subHeading } </h1>
                        <p className="mainContent"> { header.text } </p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        { state.map(info => (
                            <div className="col-4 bgMain">
                                <div className="services__box">
                                    <div className="commonIcons"> {info.icon1} {info.icon2} </div>
                                    <div className="services__box-header"> { info.heading }</div>
                                    <div className="services__box-p"> { info.text } </div>
                                </div>
                            </div>
                        ))}                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;