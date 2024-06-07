import { motion } from 'framer-motion';
import { useState } from 'react';
import Loading from './Loading';

const LazyImage = ({ src, alt, onClick, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <motion.img
        className={className}
        whileHover={{ scale: 1.1 }}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
      />
      {!loaded && <Loading />}
    </>
  );
};

export default LazyImage;
