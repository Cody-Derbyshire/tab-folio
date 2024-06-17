import '../styling/Work.css';
import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { shuffleArray } from '../functions/shuffle';
import Loading from './Loading';
const LazyImage = lazy(() => import('./LazyImage'));

const images = [
  'https://i.ibb.co/JQZ6yF6/devilsdraught-PRES-PRES-3.webp',
  'https://i.ibb.co/VQBBtCP/green-grove-branding-mockup.webp',
  'https://i.ibb.co/Wxc3k8r/scale-cardpile.webp',
  'https://i.ibb.co/KwXH4M1/label-mockup-1.webp',
  'https://i.ibb.co/jH8LBNR/label-mockup-3.webp',
  'https://i.ibb.co/d5GhPxq/wanderful-tshirt-smaller.webp',
  'https://i.ibb.co/LC15vgN/nomu-almond-smaller.png',
  'https://i.ibb.co/Pxm64vX/nomu-elevation-smaller.png',
  'https://i.ibb.co/1qM1gSS/001-signup-mockup.webp',
  'https://i.ibb.co/S34SZdG/001-signup-macbook-mockup.webp',
  'https://i.ibb.co/9tFPwf1/doozler.gif',
  'https://i.ibb.co/F4ZGgkz/kaleido-box-gradient-mockup.webp',
  'https://i.ibb.co/w6dvZ2v/kaleido-pink-purple-mockup.webp',
  'https://i.ibb.co/nRFBkgR/kaleido-purple-gradient-mockup.webp',
];

const Work = ({ bgCol, col }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);
  return (
    <>
      <div className='work-wrapper' style={{ background: bgCol, color: col }}>
        <div className='gallery'>
          {shuffledImages.map((image, index) => (
            <Suspense fallback={<Loading />} key={index}>
              <LazyImage
                src={image}
                alt={`Gallery item ${index + 1}`}
                className='gallery-item'
                onClick={() => setSelectedImage(image)}
              />
            </Suspense>
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
