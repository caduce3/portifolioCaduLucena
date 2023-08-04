import React from 'react'
import './style.css';
import { HiLocationMarker} from 'react-icons/hi' ;

function Main() {
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
                <button>Resumo</button>
            </div>
        </section>
    </>
  )
}

export default Main