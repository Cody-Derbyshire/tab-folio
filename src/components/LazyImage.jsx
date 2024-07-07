import { motion, transform } from 'framer-motion';
import { useState } from 'react';
import Loading from './Loading';

const LazyImage = ({ src, alt, onClick, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className='gallery-item-wrapper'>
        <motion.img
          className={className}
          whileHover={{
            scale: 1.1,
          }}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default LazyImage;
