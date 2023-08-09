import React, { useState, useEffect } from 'react';
import './style.css';
import Image from 'next/image';

function LinhaTempo() {
  const timelineData = [
    { date: '2019', description: 'Aqui foi onde tudo começou, em 2019 tive a oportunidade de após ser aprovado no ENEM, ingressar na Universidade do Estado do Rio Grande do Norte aqui em Natal e cursar Ciência da Computação.', imagem:'/facul.png' },
    { date: '2020', description: 'No ano de 2020 veio a pandemia, porém as aulas ficaram remotas para não sermos completamente prejudicados, foquei nos estudos!', imagem:'/estudos.png' },
    { date: '2021', description: 'Em setembro de 2021 tive a oportunidade do meu primeiro estágio como desenvolvedor, ao lado de pessoas incríveis que agradeço até hoje pelo carinho e paciência comigo, aqui aprendi muito e foi onde dei os meus primeiros passos na área do desenvolvimento.', imagem:'/trt21.jpg' },
    { date: '2022', description: 'Após 1 ano de estágio, entrei em uma bolsa de graduação na Universidade Federal do Rio Grande do Norte (UFRN)  pelo Instituto Metropóle Digital (IMD) como desenvolvedor FrontEnd web podendo fazer parte e colaborar com o sistema SUVEPI. ', imagem:'/suvepi.png' },
    { date: '2023', description: 'Atualmente estou cursando o 7° período de computação com previsão para término em 03/24, além de continuar na bolsa de graduação atuando como Dev Front-End. Também fechei meu primeiro freelancer com um empresa de marketing médico aqui mesmo de Natal/RN.', imagem:'/frela.jpg' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const updateSlideAndProgressBar = (index) => {
    if (index !== activeIndex) {
      const progressBar = document.getElementById('line-process');
      const progress = (index + 1) * (100 / timelineData.length);
      progressBar.style.width = `${progress}%`;

      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const progressBar = document.getElementById('line-process');
    const progress = (activeIndex + 1) * (100 / timelineData.length);
    progressBar.style.width = `${progress}%`;
  }, [activeIndex]);

  return (
    <section>
      <br></br>
      <div className='process-wrapper'>
        <div id='progress-bar-container'>
          <ul>
            {timelineData.map((event, index) => (
              <li
                key={index}
                className={`step ${index === activeIndex ? 'active' : ''}`}
                onClick={() => updateSlideAndProgressBar(index)}
              >
                <div className='step-inner'>
                  {event.date}
                </div>
              </li>
            ))}
          </ul>
          <div id='line'>
            <div id='line-process'></div>
          </div>
        </div>
        <div id='progress-content-section'>
          <div className={`section-content ${activeIndex <= timelineData.length - 1 ? 'active' : ''}`}>
            <h4>{timelineData[activeIndex].date}</h4>
            <p>{timelineData[activeIndex].description}</p>
            <Image id='img-card-anos' src={timelineData[activeIndex].imagem} width={450} height={250}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinhaTempo;
