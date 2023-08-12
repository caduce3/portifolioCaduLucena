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
      {/* <motion.div id='meu-nome'
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{  duration: 0.5 }}>
        <div>
          <h2>Cadu Lucena</h2>
        </div>
      </motion.div> */}

      <motion.nav id='navbar' className={scrolled ? 'scrolled' : ''}
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{  duration: 0.5 }}
      >

        <div id='nav-navegacao'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#section-sobre">About</a></li>
            <li><a href="#skills">Services</a></li>
            <li><a href="#trabalhos">Works</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </motion.nav>
    </header>
  )
}

export default Header;
