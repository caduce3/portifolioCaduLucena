import React, { useEffect } from 'react';
import './style.css';

function LineTecnologias() {

     
    "use strict";

    function qs(selector, all = false) {
      return all ? document.querySelectorAll(selector) : document.querySelector(selector);
    }
    
    useEffect(() => {
        const sections = qs('.section-line', true);
        const timeline = qs('.timeline-line');
        const line = qs('.line-line');
        line.style.bottom = `calc(100% - 20px)`;
        let prevScrollY = window.scrollY;
        let up, down;
        let full = false;
        let set = 0;
        const targetY = window.innerHeight * .8;

        function scrollHandler(e) {
            const {
              scrollY
            } = window;
            up = scrollY < prevScrollY;
            down = !up;
            const timelineRect = timeline.getBoundingClientRect();
            const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
          
            const dist = targetY - timelineRect.top;
            console.log(dist);
          
            if (down && !full) {
              set = Math.max(set, dist);
              line.style.bottom = `calc(100% - ${set}px)`;
            }
          
            if (dist > timeline.offsetHeight + 50 && !full) {
              full = true;
              line.style.bottom = `-50px`;
            }
          
            sections.forEach(item => {
              // console.log(item);
              const rect = item.getBoundingClientRect(); //     console.log(rect);
          
              if (rect.top + item.offsetHeight / 5 < targetY) {
                item.classList.add('show-me');
              }
            }); // console.log(up, down);
          
            prevScrollY = window.scrollY;
          }
          
          scrollHandler();
          line.style.display = 'block';
          window.addEventListener('scroll', scrollHandler);
    }, []);
    
    
    


  return (
    <>
        

        <div className='timeline-line'>
            <div className='line-line'></div>
            <div className='section-line'>
                <div className='bead-line'></div>
                <div className='content-line'>
                    <h4>Web Designer</h4>
                    <p>Como web designer, meu foco é unir design atrativo e funcionalidade eficiente. Desenvolvo sites que não só são visualmente aceitáveis, mas também intuitivos e fáceis de usar. Minha abordagem equilibra estética e experiência do usuário para criar plataformas que cativam e engajam os visitantes. Estou comprometido em transformar conceitos em experiências web práticas e envolventes. Se você busca um profissional que combina estética e usabilidade, estou pronto para ajudar.</p>
                </div>
            </div>

            <div className='section-line'>
                <div className='bead-line'></div>
                <div className='content-line'>
                    <h4>Web Developed</h4>
                    <p>Me concentro na construção de sites e aplicativos funcionais. Minhas habilidades em programação e desenvolvimento garantem que as soluções que crio não sejam apenas visualmente atraentes, mas também interativas e responsivas. Minha abordagem combina código limpo e eficiente com experiência do usuário,</p>
                </div>
            </div>

            <div className='section-line'>
                <div className='bead-line'></div>
                <div className='content-line'>
                    <h4>FrontEnd</h4>
                    <p>Essa é minha paixão e especialidade. Crio interfaces web atraentes e responsivas, de acordo com o que o cliente deseja sempre de forma atrativa, agradável e amigável. Estou comprometido em trazer vida aos conceitos através da programação criativa e funcionalidade prática.</p>
                </div>
            </div>

            <div className='section-line'>
                <div className='bead-line'></div>
                <div className='content-line'>
                    <h4>SEO Optimization</h4>
                    <p>Não sabe do que se trata? deixa comigo que eu mesmo cuido disso para você enquanto desenvolvo seu projeto! SEO, ou Search Engine Optimization (Otimização para Mecanismos de Busca), refere-se ao conjunto de práticas e técnicas utilizadas para melhorar a visibilidade e a classificação de um site nos resultados dos motores de busca, como o Google, Bing e outros. O objetivo do SEO é aumentar o tráfego orgânico (não pago) para um site, melhorando sua posição nos resultados de busca para palavras-chave relevantes. Minha abordagem visa aumentar o tráfego orgânico e maximizar a presença online. Estou dedicado a aprimorar a visibilidade da sua marca e conectar você com um público mais amplo através das práticas de SEO.</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default LineTecnologias