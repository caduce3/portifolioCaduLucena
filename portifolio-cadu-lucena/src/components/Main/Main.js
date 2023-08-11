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
                        <div>
                            <HiLocationMarker/>
                            Natal, Rio Grande do Norte, Brasil.
                        </div>
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
                            <li><BsArrowThroughHeartFill className='icons-resumo'/>Em um relacionamento sério.</li> 
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

        <section>
            <div id='section-sobre'>
                <h3>Sobre</h3>
                <p id='paragrafo1-sobre'>
                    Seja bem vindo ao meu portifólio, aqui você vai encontrar um pouco sobre mim e como comecei essa jornada no mundo da programação.
                </p>
                <LinhaTempo/>
            </div>
        </section>
        
        <section id='skills'>
            <h3>Serviços</h3>
            <LineTecnologias/>
        </section>

        <section id='tecnologias'>
            <h3>Tecnologias</h3>
            <div
                id='img-tecnologias'>
                <Image className='img-tecs' src="/html1.png" width={350} height={350} alt='Logo HTML5'/>
                <Image className='img-tecs' src="/css1.png" width={350} height={350} alt='Logo CSS3'/>
                <Image className='img-tecs' src="/js.png" width={350} height={350} alt='Logo JavaScript'/>
                <Image className='img-tecs' src="/r1.png" width={350} height={350} alt='Logo ReactJS'/>
                <Image className='img-tecs' src="/next.png" width={350} height={350} alt='Logo NextJS'/>
                <Image className='img-tecs' src="/git1.png" width={350} height={350} alt='Logo Git'/>
                <Image className='img-tecs' src="/docker1.png" width={350} height={350} alt='Logo Docker'/>
            </div>
        </section>

        <section id='trabalhos'>
            <h3>Trabalhos</h3>
        </section>
    </>
  )
}

export default Main