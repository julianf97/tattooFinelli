/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./_presentacionDesktop.scss";
import "./_presentacionIpad.scss";
import "./_presentacionMobile.scss";

const CANTIDAD_DE_PRESENTACIONES = 2;

export const Presentacion = React.memo(
  React.forwardRef((props, ref) => {
    const [presentacionIndex, setPresentacionIndex] = useState(1);
    const controls = useAnimation();
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);

    const titleText = "Deft Ink";
    const subtittleText = "SAN DIEGO TATTOO ARTIST";
    const buttonText = "MAKE ME AN APPOINTMENT NOW";
    const secondTitleText = "Bring your idea to life";
    const secondSubtitleText = "CONTACT ME FOR A CONSULTATION";

    const transitionsVariants = {
      hidden: {
        opacity: 0,
        scale: 0.9,
        y: -50,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeInOut" },
      },
      initial: {
        opacity: 0,
        scale: 0.9,
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

    const defaultSecondTextAnimations = {
      hidden: {
        opacity: 0,
        y: -5,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
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
        transition: { duration: 0.3, ease: "easeInOut" },
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
        transition: { duration: 0.5, ease: "easeInOut" },
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

          setAnimationCompleted(false);
          setTitleVisible(false);
        }, 400);

        setTimeout(() => {
          controls.start("enter");
        }, 800);
      }, 8000);

      return () => clearInterval(interval);
    }, [controls, presentacionIndex]);

    const handleAnimationComplete = () => {
      setAnimationCompleted(true);
    };

    const handleTitleComplete = () => {
      setTitleVisible(true);
    };

    const handleOpenWhatsApp = () => {
      const phoneNumber = "+393317347067";
      const message = "Hola, estoy interesado en tus servicios de tatuaje";

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    };

    return (
      <div className={`contenedorGeneral`} ref={ref}>
        <AnimatePresence exitBeforeEnter={false} mode="wait">
          <motion.div
            key={presentacionIndex}
            className={`contenedorImagen presentacion${presentacionIndex}`}
            initial={transitionsVariants.initial}
            animate={transitionsVariants.visible}
            exit={transitionsVariants.hidden}
          />
        </AnimatePresence>
        <div className="contenedorTituloyBtn">
          <div className="contenedorInternoTituloyBtn">
            <div className="contenedorTitulo">
              {titleVisible && (
                <motion.h1
                  key={presentacionIndex}
                  onAnimationComplete={() => {
                    handleAnimationComplete();
                    controls.start("showSubtitle");
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.1 }}
                >
                  {presentacionIndex === 2 ? (
                    <>
                      {secondTitleText.split(" ").map((word, wordIndex, wordsArray) => (
                        <React.Fragment key={wordIndex}>
                          {word.split("").map((char, charIndex) => (
                            <motion.span
                              className="motionSpan"
                              variants={defaultSecondTextAnimations}
                              key={char + charIndex}
                            >
                              {char}
                            </motion.span>
                          ))}
                          {wordIndex < wordsArray.length - 1 && (
                            <motion.span variants={spaceVariants}>&nbsp;</motion.span>
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    <>
                      {titleText.split(" ").map((word, wordIndex, wordsArray) => (
                        <React.Fragment key={wordIndex}>
                          {word.split("").map((char, charIndex) => (
                            <motion.span
                              className="motionSpan"
                              variants={defaultTextAnimations}
                              key={char + charIndex}
                            >
                              {char}
                            </motion.span>
                          ))}
                          {wordIndex < wordsArray.length - 1 && (
                            <motion.span variants={spaceVariants}>&nbsp;</motion.span>
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </motion.h1>
              )}
              {animationCompleted && (
                <>
                  {presentacionIndex === 2 ? (
                    <motion.div
                      style={{ position: "absolute", top: "310px", left: 0 }}
                      initial="hidden"
                      animate="visible"
                      variants={subtittleTextVariants}
                      className="contenedorSubTitulo"
                      key={presentacionIndex} 
                    >
                      {secondSubtitleText}
                    </motion.div>
                  ) : (
                    <motion.div
                      style={{ position: "absolute", top: "310px", left: 0 }}
                      initial="hidden"
                      animate="visible"
                      variants={subtittleTextVariants}
                      className="contenedorSubTitulo"
                      key={presentacionIndex} 
                    >
                      {subtittleText}
                    </motion.div>
                  )}
                </>
              )}
            </div>
            <motion.div
              onAnimationComplete={handleTitleComplete}
              initial="hidden"
              animate="visible"
              variants={contenedorBtnVariants}
              className="contenedorBtn"
              key={presentacionIndex} 
            >
              <button onClick={handleOpenWhatsApp} className="btn">
                {buttonText}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  })
);
