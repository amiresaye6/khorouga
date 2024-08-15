
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor2 = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', mouseMove);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const cursorVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50"
          style={{
            left: position.x,
            top: position.y,
          }}
          variants={cursorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="36px"
              height="36px"
              viewBox="0 0 24 24"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
              className="text-slate-900"
            >
              <defs>
                <linearGradient id="a" x1="11.992" x2="11.992" y1="22.192" y2="1.803" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="1" stopColor="#2bdada" offset="0"></stop>
                  <stop stopOpacity="1" stopColor="#008080" offset="1"></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  fill="url(#a)"
                  d="m21.606 10.789-7.437 3.38-3.38 7.437a1 1 0 0 1-1.844-.055L1.875 3.166a1.007 1.007 0 0 1 1.292-1.291l18.385 7.07a1.006 1.006 0 0 1 .054 1.844z"
                  opacity="1"
                ></path>
              </g>
            </svg>
            <div
              className="pointer-events-none absolute rounded-full"
              style={{
                width: '100px',
                height: '100px',
                background: 'rgba(64, 224, 208, 0.5)',
                filter: 'blur(50px)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CustomCard2 = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <a
      href="/"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://res.cloudinary.com/dl2adjye7/image/upload/v1716789479/abstract-technology-concept-background-vertical-d-illustration-81690352_dnidkh.webp" alt="Noteworthy technology acquisitions 2021" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
  );
};

const CustomCursorCard2 = () => {
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
    <div className="relative">
      <CustomCursor2 isVisible={cursorVisible} />
      <div className="p-0">
        <CustomCard2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </div>
    </div>
  );
};

function GOOO() {
  return (
    <div className="h-screen text-center py-20">
      <CustomCursorCard2></CustomCursorCard2>
    </div>
  );
}

export default GOOO;
