import React from 'react';
import { FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaDocker, FaCss3Alt, FaReact, FaJava, } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiAzuredevops, } from 'react-icons/si';

function Skills() {

    const [header] = React.useState({ 
        subHeading: "Habilidades", 
        text: "Desenvolvimento de Sistemas em projetos pessoais front-end e back-end\
         aplicando as melhores práticas de programação, com as seguintes tecnologias:", 
    });

    const [state] = React.useState([
        
        { 
            id: 2, 
            icon1: <FaReact />, 
            heading: 'React.js', 
        },
        { 
            id: 3, 
            icon1: <FaNodeJs />, 
            heading: 'Node.js', 
        },
        { 
            id: 4, 
            icon1: <FaJsSquare />, 
            heading: 'JavaScript', 
        },
        { 
            id: 5, 
            icon1: <FaDocker />, 
            heading: 'Docker',  
        },
        { 
            id: 6, 
            icon1: <SiMysql />,
            heading: 'MySQL', 
        },
        { 
            id: 8, 
            icon1: <FaHtml5 />,
            heading: 'HTML5', 
        },
        { 
            id: 9, 
            icon1: <FaCss3Alt />,
            heading: 'CSS3', 
        },
        { 
            id: 10, 
            icon1: <FaPhp />, 
            heading: 'PHP', 
        },
        { 
            id: 11, 
            icon1: <SiPostgresql />, 
            heading: 'PostgreSQL', 
        },
        { 
            id: 12, 
            icon1: <FaJava />, 
            heading: 'Java', 
        },
        { 
            id: 13, 
            icon1: <FaReact />, 
            heading: 'React Native', 
        },
        { 
            id: 14, 
            icon1: <SiAzuredevops />, 
            heading: 'DevOps', 
        },
    ]);

    return(
        <div className="skills" id="skills">
            <div className="container">
                <div className="skills__header">
                    <div className="common-skills">
                        <h1 className="mainSkillsHeader"> { header.subHeading } </h1>
                        <p className="mainSkillsContent"> { header.text } </p>
                        <div className="commonSkillsBorder"></div>
                    </div>

                    <div className="rowSkills bgMainSkills">
                        { state.map(info => (
                            <div className="col-4Skills bgMainSkills">
                                <div className="skills__box">
                                    <div className="commonSkillsIcons"> {info.icon1} </div>
                                    <div className="skills__box-header"> { info.heading }</div>
                                </div>
                            </div>
                        ))}                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;