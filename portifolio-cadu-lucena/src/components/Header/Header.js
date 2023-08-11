// Header.js
'use client'
import React, { useEffect, useState } from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import './style.css';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <motion.nav id='navbar' className={scrolled ? 'scrolled' : ''}
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{  duration: 0.5 }}
      >
        <div>
          <h2>Cadu Lucena</h2>
        </div>
        <div id='nav-navegacao'>
          <ul>
            <li><a href="#navbar">Início</a></li>
            <li><a href="#home">Sobre</a></li>
            <li><a href="#home">Serviços</a></li>
            <li><a href="#home">Trabalhos</a></li>
            <li><a href="#home">Fale comigo</a></li>
          </ul>
        </div>
        <div id='nav-redes-sociais'>
          <ul>
            <li><a href="https://www.linkedin.com/in/carlos-eduardo-b0baa5229/" target='_blank'> <BsLinkedin /> </a></li>
            <li><a href="https://www.instagram.com/cadu.lucenaa/" target='_blank'> <BsInstagram /> </a></li>
            <li><a href="https://github.com/caduce3" target='_blank'> <BsGithub /></a> </li>
          </ul>
        </div>
      </motion.nav>
    </header>
  )
}

export default Header;
