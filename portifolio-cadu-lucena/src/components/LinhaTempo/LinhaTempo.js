import React, { useState, useEffect } from 'react';
import './style.css';

function LinhaTempo() {
  const timelineData = [
    { date: '2019', description: 'Aqui foi onde tudo começou, foi onde tive a oportunidade de após fazer o ENEM, ingressar na Universidade do Estado do Rio Grande do Norte aqui em Natal.' },
    { date: '2020', description: 'Descrição do evento 2' },
    { date: '2021', description: 'Descrição do evento 3' },
    { date: '2022', description: 'Descrição do evento 4' },
    { date: '2023', description: 'Descrição do evento 5' },
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
          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`section-content ${index <= activeIndex ? 'active' : ''}`}
            >
              <h4>{event.date}</h4>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LinhaTempo;
