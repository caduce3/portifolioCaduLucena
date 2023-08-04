'use client'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';
import { HiLocationMarker} from 'react-icons/hi' ;

function Main(args) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);  
  
return (

    <>
        <section id='home'>
            <div>
                <p>Olá, eu sou o Cadu,</p>
                <h1>Desenvolvedor <br/> Front-End </h1>
                <div>
                    <HiLocationMarker/>
                    Natal, Rio Grande do Norte, Brasil.
                </div>
                <Button id='btn-resumo' onClick={toggle}>Resumo</Button>
                <Modal isOpen={modal} toggle={toggle} {...args}id='modal-modal' >
                    <ModalHeader id='titulo-modal' >Um pouco sobre mim...</ModalHeader>
                    <ModalBody id='modal-body'>
                        Fala galera, meu nome é Cadu, tenho 23 anos e sou natural de Natal, Rio Grande do Norte, Brasil. 
                        Um dev não só apaixonado por tecnologia mas também por esporte. <br/> <br/>
                        
                        Sou um Desenvolvedor FrontEnd com +2 anos de experiência nesse área e minha jornada começou quando estagiei no Tribunial Regional do Trabalho da 21ª Região como desenvolvedor. <br/> <br/>

                        Ao longo dos anos, tive a oportunidade de trabalhar em diversos projetos motivados, o que me iniciou um crescimento profissional e pessoal significativo. <br/> <br/>

                        Atualmente sou graduando em Ciência da computação na UERN/Natal e bolsista de graduação na UFRN pelo IMD atuando como desenvolvedor frontEnd Web no projeto <a href="https://www.imd.ufrn.br/portal/noticias/6379/sistema-para-vigil%C3%A2ncia-epidemiol%C3%B3gica-desenvolvido-pelo-imd-entra-em-atividade-no-rn" target='_blank'>SUVEPI</a>. <br/> <br/>
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