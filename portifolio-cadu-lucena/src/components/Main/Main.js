'use client'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';
import { HiLocationMarker} from 'react-icons/hi' ;
import { MdGames} from 'react-icons/md' ;
import { BsPersonWorkspace, BsArrowThroughHeartFill, BsBookHalf} from 'react-icons/bs' ;
import { GrPersonalComputer} from 'react-icons/gr' ;
import { AiOutlineEnvironment} from 'react-icons/ai' ;
import { BiSolidBabyCarriage} from 'react-icons/bi' ;
import Image from 'next/image';
import LinhaTempo from '../LinhaTempo/LinhaTempo';
import LineTecnologias from '../LineTecnologias/LineTecnologias';
import CardTrabalhosProjetos from '../CardTrabalhosProjetos/CardTrabalhosProjetos';
import { motion } from 'framer-motion';

function Main(args) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);  

return (

    <>
        <section id='home'>
            <div>
                <div id='div-forma' >
                    <motion.div id='div-dev'
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{  duration: 0.5 }}
                    >
                        <p>Olá, eu sou o Cadu,</p>
                        <h1>Desenvolvedor <br/> Front-End </h1>
                        <p id='paragrafo'>
                            Atuo há 2 anos na área do desenvolvimento web, um deles como estagiário no TRT 21, e outro como bolsista de graduação como desenvolvedor front end web no sistema SUVIGE.
                            Atualmente focado no NextJS e sempre atento também a otimização de SEO, procurando estudar mais sobre os states e hooks do React e iniciante no mundo mobile com ReactNative.
                        </p>
                        <Button id='btn-resumo' onClick={toggle}>Resumo</Button>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -500 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{  duration: 0.5 }}
                    >
                        <Image id='img-perfil' src="/eu4.png" width={350} height={350}/>
                    </motion.div>
                </div>

                
                
                <Modal isOpen={modal} toggle={toggle} {...args}id='modal-modal' >
                    <ModalHeader id='titulo-modal' >Um pouco sobre mim...</ModalHeader>
                    <ModalBody id='modal-body'>
                        <ul>
                            <li><BsPersonWorkspace className='icons-resumo'/>#OPEN_TO_WORK</li>
                            <li><GrPersonalComputer className='icons-resumo'/>Desenvolvedor FrontEnd</li>
                            <li><BiSolidBabyCarriage className='icons-resumo'/>23 anos.</li> 
                            <li><AiOutlineEnvironment className='icons-resumo'/>Natal, Rio Grande do Norte, Brasil.</li> 
                            <li><BsBookHalf className='icons-resumo'/>Graduando em Ciência da Computação pela UERN.</li> 
                            <li><MdGames className='icons-resumo'/>Hobbys: Futebol, Games e Programação.</li> 
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button  id='btn-modal' onClick={toggle}>
                            Voltar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </section>

        <section id='skills'>
        <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{  duration: 1, delay: 0.5  }}
            >
                <h3>Serviços</h3>
            </motion.div>
            <LineTecnologias/>
        </section>

        <section id='trabalhos'>
            <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{  duration: 1, delay: 0.5  }}
                >
                    <h3>Trabalhos</h3>
            </motion.div>
            <motion.div className='container-trabalhos'
            
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{  duration: 0.5, delay: 0.5  }}
            >
                <a href="https://www.imd.ufrn.br/portal/noticias/6379/sistema-para-vigil%C3%A2ncia-epidemiol%C3%B3gica-desenvolvido-pelo-imd-entra-em-atividade-no-rn" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/suvepi.png'} titulo='SUVEPI, Parceria IMD e SESAP/RN' descricao='Um sistema capaz de reunir e verificar automaticamente os dados relativos à pandemia de Covid-19 oriundos de diferentes fontes, gerando maior qualidade e confiabilidade das informações utilizadas pelas secretarias de sáude do estado no tocante à Vigilância Epidemiológica. Atuo como dev front-end web.'/>
                </a>

                <a href="https://clinica-prototipo2.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/frela2.jpg'} titulo='FreeLancer para a Synapsismkt' descricao='Uma lading page 100% responsiva para captar o cliente para um clínica médica, o projeto só foi 70% finalizado, já foi totalmente aprovado pelo cliente porém falta o mesmo enviar os textos e imagens que ele deseja, porém mesmo assim já bateu 80/100 de SEO. Aqui utilizei HTML5 (semântico como sempre), CSS3, JS, Tailwind CSS, e NextJS.'/>
                </a>

                <a href="https://includee2023-1-qx1h.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/include.jpg'} titulo='INCLUDE UERN Natal' descricao='O INCLUDE é um evento de inclusão aos colouros do curso de computação na UERN Natal, foi me pedido que fizesse uma landing page para mostrar tudo o que seria abordado juntamente com informações sobre o local, data e etc, além de redirecionar a um formulário para inscrição. Aqui utilizei HTML5, CSS3, Bootstrap e Js.'/>
                </a>

                <a href="https://website-carlos-andre-rl91.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/webSiteCarlosAndre.jpg'} titulo='Portifólio para o prof° Carlos André' descricao='Portifólio desenvolvido para o professor da UERN Carlos André mostrar um pouco de quem é, o que faz na nossa universidade como projetos, ministração de disciplinas, sua formação dentre outras informações. Utilizando HTML5, CSS3, RectStrap e ReactJs.'/>
                </a>
            </motion.div>
        </section>

        <section id='projetos'>
            <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{  duration: 1, delay: 0.5  }}
                >
                    <h3>Projetos</h3>
            </motion.div>
            <motion.div className='container-trabalhos'
            
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{  duration: 0.5, delay: 0.5  }}
            >
                <a href="https://pokedex-chi-eight-74.vercel.app/#" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/pokedex.jpg'} titulo='Pokedex' descricao='Implementei uma pokedex para reforçar meus conhecimentos em consumir API, utilizei o fetch do JS para fazer o consumo dos dados, implementei um filtro por nome e tipo de pokemon e utilizei a própria API do pokemon. Tecs utilizadas: HTML5, CSS3, JS e Bootstrap.'/>
                </a>

                <a href="https://plataforma-aac-23.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/arqAvan.jpg'} titulo='Plataforma AAC' descricao='Esse projeto consistiu em fazer uma plataforma para divulgação e cadastro no evento (EATEC) que foi realizado na UERN Natal com os cursos de tecnologia. Tecs utilizadas: HTML5, CSS3, JS e Bootstrap.'/>
                </a>

                <a href="https://hackathonuern22.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/haka.jpg'} titulo='Hakaton UERN Natal' descricao='O Hakaton é um evento que tem como objetivo promover desafios e premiação aos alunos, a web page faz o cadastro dos participantes através de um formulário e monta os times. Tecs utilizadas: HTML5, CSS3, ReactJS.'/>
                </a>

                <a href="https://pizzaria-one.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/pizzaria.jpg'} titulo='Pizzaria Lapetitozaa' descricao='Essa web page desenvolvi na disciplina de banco de dados, o intuito era simular um cadastro de cliente a inserir os dados através da web page. Tecs utilizadas: HTML5, CSS3, JS e Bootstrap.'/>
                </a>

                <a href="https://cordel-site.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/cordel.jpg'} titulo='Cordel Moderno' descricao='Aqui o intuito foi colocar o cordel feito por Milton Duarte de uma forma diferenciada, o objetivo final foi realmente praticar e aprender mais sobre front, fortalecer os conhecimento. Tecs utilizadas: HTML5 e CSS3.'/>
                </a>

                <a href="https://bootstrap-alura-estudos.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/fruta.jpg'} titulo='Fruta e Fruto' descricao='Implementando uma lading page de receitas. Tecs utilizadas: HTML5, CSS3 e Bootstrap.'/>
                </a>

                <a href="https://desafio-coor-lab-zeta.vercel.app/" target='_blank'>
                    <CardTrabalhosProjetos caminhoImagem={'/desafio.jpg'} titulo='Desafio Melhor Frete' descricao='Esse foi um desafio para um processo seletivo que participei, onde pedia para consumir uma API disponibilizada por eles usando o AXIOS. O objetivo era construir o front, captar os dados de localidade e peso e trazer o resultado do frete mais barato e o frete mais rápido. Tecs utilizadas: VueJS, CSS3, HTML5, JS.'/>
                </a>
            </motion.div>
        </section>

        <section>
            <div id='section-sobre'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{  duration: 0.5 }}
                >
                    <h3>Sobre</h3>
                    <p id='paragrafo1-sobre'>
                        Seja bem vindo ao meu portifólio, aqui você vai encontrar um pouco sobre mim e como comecei essa jornada no mundo da programação.
                    </p>
                </motion.div>
                <LinhaTempo/>
            </div>
        </section>

        <section id='tecnologias'>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{  duration: 1, delay: 0.5  }}
            >
                <h3>Tecnologias</h3>
            </motion.div>
            <div id='img-tecnologias'>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.5 }}>
                    <Image className='img-tecs' src="/html1.png" width={350} height={350} alt='Logo HTML5'/>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.6 }}>
                    <Image className='img-tecs' src="/css1.png" width={350} height={350} alt='Logo CSS3'/>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.7 }}>
                    <Image className='img-tecs' src="/js.png" width={350} height={350} alt='Logo JavaScript'/>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.8 }}>
                    <Image className='img-tecs' src="/r1.png" width={350} height={350} alt='Logo ReactJS'/>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 0.9 }}>
                    <Image className='img-tecs' src="/next.png" width={350} height={350} alt='Logo NextJS'/>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 1 }}>
                    <Image className='img-tecs' src="/git1.png" width={350} height={350} alt='Logo Git'/>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{  duration: 1.1 }}>
                    <Image className='img-tecs' src="/docker1.png" width={350} height={350} alt='Logo Docker'/>
                </motion.div>

            </div>
        </section>

    </>
  )
}

export default Main