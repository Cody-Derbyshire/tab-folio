import '../styling/Me.css';
import me from '../assets/me.jpg';
import { motion } from 'framer-motion';

const Me = ({ bgCol, col, initStyle, hoverStyle }) => {
  return (
    <>
      <div className='me-wrapper' style={{ background: bgCol, color: col }}>
        <div className='me-left inter-med'>
          <motion.a
            href='https://www.linkedin.com/in/cody-derbyshire'
            className='h1-clamp-xs'
            style={initStyle}
            whileHover={hoverStyle}
            target='_blank'
          >
            linkedin{' '}
            <span className='material-symbols-outlined'>north_east</span>
          </motion.a>
          <motion.a
            href='https://x.com/littleKodai'
            className='h1-clamp-xs'
            style={initStyle}
            whileHover={hoverStyle}
            target='_blank'
          >
            twitter{' '}
            <span className='material-symbols-outlined'>north_east</span>
          </motion.a>
        </div>
        <div className='me-right  inter-italic'>
          <p className='h1-clamp-xs' style={{ opacity: '50%' }}>
            thats me &darr;
          </p>
          <img className='meimg' src={me} alt='' />
        </div>
      </div>
    </>
  );
};

export default Me;
