import React, { useState, useEffect } from 'react';
import './style.css';
import Image from 'next/image';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function LinhaTempo() {

  const [conteudo, setConteudo] = useState({
    ano: '2019',
    descricao: 'Aqui foi onde tudo começou, em 2019 tive a oportunidade de após ser aprovado no ENEM, ingressar na Universidade do Estado do Rio Grande do Norte aqui em Natal e cursar Ciência da Computação.',
    caminhoImagem: '/facul.png'
  });

  const changeConteudo = (ano, descricao, caminhoImagem) => {
    setConteudo({
      ano: ano,
      descricao: descricao,
      caminhoImagem: caminhoImagem
    });
  };

  return (
    <section>
      <div id='div-time-line'>
        <div id='div-buttons'>
          <button className='buttons-time-line' onClick={() => changeConteudo('2019', 'Aqui foi onde tudo começou, em 2019 tive a oportunidade de após ser aprovado no ENEM, ingressar na Universidade do Estado do Rio Grande do Norte aqui em Natal e cursar Ciência da Computação.', '/facul.png')} >2019</button>
          <button className='buttons-time-line' onClick={() => changeConteudo('2020', 'No ano de 2020 veio a pandemia, porém as aulas ficaram remotas para não sermos completamente prejudicados, foquei nos estudos!', '/estudos.png')}>2020</button>
          <button className='buttons-time-line' onClick={() => changeConteudo('2021', 'Em setembro de 2021 tive a oportunidade do meu primeiro estágio como desenvolvedor, ao lado de pessoas incríveis que agradeço até hoje pelo carinho e paciência comigo, aqui aprendi muito e foi onde dei os meus primeiros passos na área do desenvolvimento.', '/trt21.jpg')}>2021</button>
          <button className='buttons-time-line' onClick={() => changeConteudo('2022', 'Após 1 ano de estágio, entrei em uma bolsa de graduação na Universidade Federal do Rio Grande do Norte (UFRN)  pelo Instituto Metropóle Digital (IMD) como desenvolvedor FrontEnd web podendo fazer parte e colaborar com o sistema SUVEPI.', '/suvepi.png')}>2022</button>
          <button className='buttons-time-line' onClick={() => changeConteudo('2023', 'Atualmente estou cursando o 7° período de computação com previsão para término em 03/24, além de continuar na bolsa de graduação atuando como Dev Front-End. Também fechei meu primeiro freelancer com um empresa de marketing médico aqui mesmo de Natal/RN.', '/frela.jpg')}>2023</button>
        </div>
        <div id='div-do-conteudo-time-line'>
          <Card
          style={{
            width: '28.3rem',
            borderRadius: '10px'
          }}
        >
          <Image id='img-card-anos' src={conteudo.caminhoImagem} width={450} height={250}/>
          <CardBody>
            <CardTitle>
              <h4>{conteudo.ano}</h4>
            </CardTitle>
            <CardText>
              <p>{conteudo.descricao}</p>
            </CardText>
          </CardBody>
        </Card>
        </div>
      </div>
      
    </section>
  )
}

export default LinhaTempo
