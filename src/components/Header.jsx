import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import '../styling/Header.css';

const fonts = [
  'BergenMono-Bold',
  'BergenMono-BoldItalic',
  'Kelsi-Regular',
  'Kelsi-fill',
];

const randomFont = () => {
  const randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
};

const colorSchemes = [
  'light',
  'yellow',
  'blue',
  'green',
  'darkGreen',
  'purple',
  'pink',
  'orange',
  'maroon',
  'dark',
];

const Header = ({ bgCol, col, colorScheme, setColorScheme }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cycleScheme = () => {
    const currentIndex = colorSchemes.indexOf(colorScheme);
    const nextIndex = (currentIndex + 1) % colorSchemes.length;
    setColorScheme(colorSchemes[nextIndex]);
  };

  return (
    <>
      <div className='header-wrapper' style={{ background: bgCol, color: col }}>
        <AnimatePresence mode='wait'>
          <div
            className='header-name'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1>C</h1>
            {isHovered && (
              <motion.h1
                key='codyderbyshire'
                className='uppercase'
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: randomFont() }}
              >
                ody Derbyshire
              </motion.h1>
            )}
          </div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <div className='header-btn-wrapper'>
            <p className='header-btn-text copy inter-italic'>click me &rarr;</p>
            <motion.button
              key={colorScheme}
              className=' btn'
              style={{ background: col }}
              onClick={() => cycleScheme()}
            >
              <motion.svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                className='sun-svg'
                fill={bgCol}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <motion.path
                  className='sun-svg'
                  d='M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z'
                />
              </motion.svg>
            </motion.button>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
