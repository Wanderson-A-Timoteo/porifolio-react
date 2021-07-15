import React from 'react'

function About() {
  const [header] = React.useState({
    subHeader: 'Sobre',
    text: 'Meu nome é Wanderson de Almeida Timóteo, sou estudante de Sistemas de Informação na UFMT,\
      apaixonado por tecnologia e programação'
  })
  const [state] = React.useState([
    { id: 1, title: 'Nome:', text: 'Wanderson A. Timóteo' },
    { id: 2, title: 'E-mail:', text: 'wanderson_timoteo@hotmail.com' },
    { id: 3, title: 'Telefone:', text: '+55 65 99292 5286' },
    {
      id: 4,
      title: 'Linkedin',
      text: 'www.linkedin.com/in/wanderson-a-timoteo'
    }
  ])
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img
                src="/images/my-photo-about.jpg"
                alt="Imagem de Wanderson Timóteo"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Olá!</h1>
              <div className="about__info-p1">
                Eu me descrevo como alguém persistente, que aprende rápido e ama
                resolver problemas usando soluções simples e escaláveis.
              </div>
              <div className="about__info-p2">
                Procuro sempre me atualizar sobre programação, principalmente na
                stack JavaScript, usando no front-end React.js, no back-end
                Node.js e no mobile React Native.
              </div>
              {/* <div className="about__info-p3">
                <strong> Mudança de carreira: </strong> Sou técnico em
                telecomunicações com experiência a mais de 10 anos, porém estava
                insatisfeito com minha carreira, pois estava estágnado na
                profissão e não tinha coragem de mudar. Por isso decidi dar o
                primeiro passo e me inscrever para o ENEM, apesar de ter
                concluído o ensino médio e o curso técnico a muitos anos atrás.
                Então procurei um cursinho em Cuiabá - MT para me preparar, foi
                então que iniciei no CuiabáVest, um cursinho gratuito.
              </div> */}
              <div className="info__contacts">
                <div className="row">
                  {state.map(info => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
