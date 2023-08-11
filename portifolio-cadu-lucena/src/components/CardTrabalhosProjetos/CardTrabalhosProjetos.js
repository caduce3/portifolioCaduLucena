'use client'
import React from 'react'
import './style.css'
import Image from 'next/image';

function CardTrabalhosProjetos(props) {
  return (
    <>
        <div>
          <div id='div-content-projeto'>
            <Image id='imagem-projeto' src={props.caminhoImagem} width={400} height={220}/>
            <div id='div-descricao-projeto'>
              <h4>{props.titulo}</h4>
              <p>{props.descricao}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardTrabalhosProjetos