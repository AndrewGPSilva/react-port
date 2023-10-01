import React, { useState, useEffect } from 'react';
import style from './Text.module.css'

function Typewriter() {
  const text = 'Backend Developer';
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    if (isTyping) {
      interval = setInterval(() => {
        setDisplayText((prevText) => {
          if (prevText.length === text.length) {
            setIsTyping(false);
          } else {
            currentIndex++;
          }
          return text.slice(0, currentIndex);
        });
      }, 500);
    } else {
      interval = setInterval(() => {
        setDisplayText((prevText) => {
          if (prevText.length === 0) {
            setIsTyping(true);
            currentIndex = 0;
          } else {
            currentIndex--;
          }
          return text.slice(0, currentIndex);
        });
      }, 500); // Ajuste a velocidade do apagamento aqui (em milissegundos)
    }

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <>
      <div className={style.container}>
        <h1>{displayText}</h1>
      </div>
    </>
  )
}

export default Typewriter;