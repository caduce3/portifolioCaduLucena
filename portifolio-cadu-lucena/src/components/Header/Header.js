import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs' ;
import './style.css';

function Header() {
  return (
    <header>
        <nav id='navbar'>
            <div>
                <h2>Cadu Lucena</h2>
            </div>
            <div id='nav-navegacao'>
                <li><a href="#navbar">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Work</a></li>
            </div>
            <div id='nav-redes-sociais'>
                <li><a href="https://www.linkedin.com/in/carlos-eduardo-b0baa5229/" target='_blank'> <BsLinkedin/> </a></li>
                <li><a href="https://www.instagram.com/cadu.lucenaa/" target='_blank'> <BsInstagram/> </a></li>
                <li><a href="https://github.com/caduce3" target='_blank'> <BsGithub/></a> </li>
            </div>
        </nav>
    </header>
  )
}

export default Header