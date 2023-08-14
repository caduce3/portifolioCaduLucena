'use client'
import React from 'react'
import './style.css'

function Footer() {
  return (
    <>
        <footer id='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0D0D0D" fill-opacity="1" d="M0,256L80,234.7C160,213,320,171,480,165.3C640,160,800,192,960,176C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                <text x="10%" y="81%" fill="white" font-size="20">
                    Email: <a href="mailto:cadu.ce3@gmail.com">cadu.ce3@gmail.com</a>
                </text>
                <text x="44%" y="81%" fill="white" font-size="20">
                    © 2023 - Cadu Lucena
                </text>
            </svg>
        </footer>
    </>
  )
}

export default Footer