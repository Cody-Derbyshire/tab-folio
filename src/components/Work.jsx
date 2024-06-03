import '../styling/Work.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const images = [
  'https://i.ibb.co/JQZ6yF6/devilsdraught-PRES-PRES-3.webp',
  'https://i.ibb.co/VQBBtCP/green-grove-branding-mockup.webp',
  'https://i.ibb.co/hRzVHYz/SCALE-square-01.webp',
  'https://i.ibb.co/KwXH4M1/label-mockup-1.webp',
  'https://i.ibb.co/jH8LBNR/label-mockup-3.webp',
  'https://i.ibb.co/d5GhPxq/wanderful-tshirt-smaller.webp',
  'https://i.ibb.co/LC15vgN/nomu-almond-smaller.png',
  'https://i.ibb.co/Pxm64vX/nomu-elevation-smaller.png',
];

const Work = ({ bgCol, col }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className='work-wrapper' style={{ background: bgCol, color: col }}>
        <div className='gallery'>
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Gallery item ${index + 1}`}
              className='gallery-item'
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedImage(image)}
            />
          ))}

          {selectedImage && (
            <Modal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Work;
