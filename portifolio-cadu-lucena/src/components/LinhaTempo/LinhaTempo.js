import React, { useState, useEffect } from 'react';
import './style.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

function LinhaTempo() {

  const [conteudo, setConteudo] = useState({
    ano: '2019',
    descricao: 'Aqui foi onde tudo começou, em 2019 tive a oportunidade de após ser aprovado no ENEM, ingressar na Universidade do Estado do Rio Grande do Norte aqui em Natal e cursar Ciência da Computação, conclusão prevista para março/2024.',
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
          <motion.button initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.3 }} className='buttons-time-line' onClick={() => changeConteudo('2019', 'Aqui foi onde tudo começou, em 2019 tive a oportunidade de após ser aprovado no ENEM, ingressar na Universidade do Estado do Rio Grande do Norte aqui em Natal e cursar Ciência da Computação, conclusão prevista para março/2024.', '/facul.png')} >2019</motion.button>
          <motion.button initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.5 }} className='buttons-time-line' onClick={() => changeConteudo('2020', 'No ano de 2020 veio a pandemia, porém as aulas ficaram remotas para não sermos completamente prejudicados, foquei nos estudos!', '/estudos.png')}>2020</motion.button>
          <motion.button initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.7 }} className='buttons-time-line' onClick={() => changeConteudo('2021', 'Em setembro de 2021 tive a oportunidade do meu primeiro estágio como desenvolvedor, ao lado de pessoas incríveis que agradeço até hoje pelo carinho e paciência comigo, aqui aprendi muito e foi onde dei os meus primeiros passos na área do desenvolvimento, utilizando HTML5, CSS3, JS, GIT, Docker e Java. Atuei na criação de interfaces, TDD com JUnit, documentação e aprimoramento de código. ', '/trt21.jpg')}>2021</motion.button>
          <motion.button initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.9 }} className='buttons-time-line' onClick={() => changeConteudo('2022', 'Após 1 ano de estágio, entrei em uma bolsa de graduação na Universidade Federal do Rio Grande do Norte (UFRN)  pelo Instituto Metropóle Digital (IMD) atuando desenvolvedor FrontEnd web para atuar no sistema SUVEPI, colaborando com a inserção de novos agravos, manutenção e criação de interfaces e testes no sistema. Tecnologias que utilizo/utilizei HTML5, CSS3, JS, JQuery, Boostrap, Docker Desktop, GIT, Noções de SQL com PostgreSQL e noções de Django. Gerenciamento de equipe com SCRUM utilizando SPRINTS, 100% remoto. ', '/suvepi.png')}>2022</motion.button>
          <motion.button initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 1.1 }} className='buttons-time-line' onClick={() => changeConteudo('2023', 'Atualmente estou cursando o 7° período de computação com previsão para término em 03/24, além de continuar na bolsa de graduação atuando como dev Front-End, também fechei meu primeiro freelancer com um empresa de marketing digital, a synapsismkt. Ministrei meu primeiro projeto de ensino ajudando alunos do 1° período de computação a fortalecer seu aprendizado em programação de forma dinâmica criando um mini jogo com construct 3, e entrei em uma bolsa de pesquisa PIBIC onde tem como objetivo a Aprendizagem Divertida e Consciente: Desenvolvimento de um jogo RPG para promover a compreensão dos objetivos de desenvolvimento sustentável com Npcs empáticos utilizando o construct 3. ', '/frela.jpg')}>2023</motion.button>
        </div>
        <motion.div id='div-do-conteudo-time-line'
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{  duration: 0.5 }}
        >
          <Image id='img-card-anos' src={conteudo.caminhoImagem} width={450} height={250}/>
          <h4>{conteudo.ano}</h4>
          <p>{conteudo.descricao}</p>
        </motion.div>
      </div>
      
    </section>
  )
}

export default LinhaTempo
