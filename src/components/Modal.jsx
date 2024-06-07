import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt='Enlarged pic'
        initial={{ y: '-50dvh' }}
        animate={{ y: 0 }}
        onClick={handleClose}
      />
    </motion.div>
  );
};

export default Modal;
