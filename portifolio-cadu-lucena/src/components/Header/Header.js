// Header.js
'use client'
import React, { useEffect, useState } from 'react';
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
      </motion.nav>
    </header>
  )
}

export default Header;
