/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./_presentacionDesktop.scss";

const CANTIDAD_DE_PRESENTACIONES = 2;

// eslint-disable-next-line react/display-name
export const Presentacion = React.forwardRef((props, ref) => {
  const [presentacionIndex, setPresentacionIndex] = useState(1);
  const controls = useAnimation();
  const [animationCompleted, setAnimationCompleted] = useState(false);


  const titleText = "Deft Ink";
  const subtittleText = "SAN DIEGO TATTOO ARTIST";
  const buttonText = "MAKE ME AN APPOINTMENT NOW";

  const transitionVariants = {
    exit: {
      opacity: 0,
      x: presentacionIndex === 1 ? -50 : 50,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    enter: {
      opacity: 1,
      x: 0,
      boxShadow: "none",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const defaultTextAnimations = {
    hidden: {
      opacity: 0,
      x: 50,
      rotate: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };
  
  const subtittleTextVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  
  const contenedorBtnVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  const spaceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("exit");

      setTimeout(() => {
        setPresentacionIndex((prevIndex) => (prevIndex % CANTIDAD_DE_PRESENTACIONES) + 1);
      }, 400);

      setTimeout(() => {
        controls.start("enter");
      }, 800);
    }, 7000);

    return () => clearInterval(interval);
  }, [controls]);

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
  };

  return (
    <div className={`contenedorGeneral`} ref={ref}>
      <motion.div
        className={`contenedorImagen presentacion${presentacionIndex}`}
        animate={controls}
        variants={transitionVariants}
      />
      <div className="contenedorTituloyBtn">
        <div className="contenedorInternoTituloyBtn">
          <div className="contenedorTitulo">
            <motion.h1 onAnimationComplete={handleAnimationComplete} initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
              {titleText.split(' ').map((word, wordIndex, wordsArray) => (
                <React.Fragment key={wordIndex}>
                  {word.split('').map((char, charIndex) => (
                    <motion.span className="motionSpan" variants={defaultTextAnimations} key={char + charIndex}>
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < wordsArray.length - 1 && <motion.span variants={spaceVariants}>&nbsp;</motion.span>}
                </React.Fragment>
              ))}
            </motion.h1>
            { animationCompleted && (<>
              <motion.div
                  style={{ position: 'absolute', top: "310px", left: 0 }} // Ajusta la posición según tus necesidades
                  initial="hidden"
                  animate="visible"
                  variants={subtittleTextVariants}
                  className="contenedorSubTitulo"
                >
                  {subtittleText}
                </motion.div>
            </>) }
          </div>
            <motion.div initial="hidden" animate="visible" variants={contenedorBtnVariants} className="contenedorBtn">
            <button className="btn">{buttonText}</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
});
