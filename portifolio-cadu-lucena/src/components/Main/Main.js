'use client'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';
import { HiLocationMarker} from 'react-icons/hi' ;
import Image from 'next/image';
import LinhaTempo from '../LinhaTempo/LinhaTempo';

function Main(args) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);  
  
return (

    <>
        <section id='home'>
            <div>
                <div id='div-forma'>
                    <div>
                        <p>Olá, eu sou o Cadu,</p>
                        <h1>Desenvolvedor <br/> Front-End </h1>
                        <div>
                            <HiLocationMarker/>
                            Natal, Rio Grande do Norte, Brasil.
                        </div>
                        <Button id='btn-resumo' onClick={toggle}>Resumo</Button>
                    </div>
                    <div>
                        <Image id='img-perfil' src="/eu4.png" width={350} height={350}/>
                    </div>
                </div>

                <div>
                    <h3>Sobre.</h3>
                    <p id='paragrafo1-sobre'>
                        Seja bem vindo ao meu portifólio, aqui você vai encontrar um pouco sobre mim e como comecei essa jornada no mundo da programação.
                    </p>
                    <LinhaTempo/>
                </div>
                
                <Modal isOpen={modal} toggle={toggle} {...args}id='modal-modal' >
                    <ModalHeader id='titulo-modal' >Um pouco sobre mim...</ModalHeader>
                    <ModalBody id='modal-body'>
                        Fala galera
                    </ModalBody>
                    <ModalFooter>
                        <Button  id='btn-modal' onClick={toggle}>
                            Voltar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </section>
    </>
  )
}

export default Main