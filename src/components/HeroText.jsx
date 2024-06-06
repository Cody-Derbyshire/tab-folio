import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';
import '../styling/HeroText.css';
import '../styling/fonts.css';

const HeroText = ({
  activeTab,
  setActiveTab,
  colorScheme,
  bgCol,
  col,
  initStyle,
  hoverStyle,
}) => {
  const [isEClicked, setIsEClicked] = useState(false);
  const [isPClicked, setIsPClicked] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEClicked(false);
      setIsPClicked(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isEClicked, isPClicked]);

  const handleCopyE = (text, result) => {
    if (result) {
      setIsEClicked(true);
    }
  };
  const handleCopyP = (text, result) => {
    if (result) {
      setIsPClicked(true);
    }
  };
  return (
    <>
      <div className='hero-wrapper '>
        {activeTab === 'Home' && (
          <>
            <h1
              className='h1-clamp'
              style={{ fontFamily: 'Inter', fontWeight: '500' }}
            >
              <span className='hello-wrapper'>
                Hello{' '}
                <span className='material-symbols-outlined h1-clamp hand'>
                  waving_hand
                </span>
                ,
              </span>
              <br />
              I'm a {`{Design_Engineer} `}
              and while (I'm ≠ pure_graphics), I craft digital magic &&{' '}
              {`{front-end web wonders}`}.&nbsp;
              <br />
              <motion.a
                className='h1-clamp'
                style={initStyle}
                onClick={() => setActiveTab('Contact')}
                whileHover={hoverStyle}
              >
                Get in touch →
              </motion.a>
            </h1>
          </>
        )}
        {activeTab === 'Work' && (
          <h1
            className='h1-clamp'
            style={{ fontFamily: 'Inter', fontWeight: '500' }}
          >
            From digital{' '}
            <span className='material-symbols-outlined h1-clamp'>
              trending_flat
            </span>{' '}
            print_design, landing.pages{' '}
            {/* <span className='material-symbols-outlined h1-clamp'>
              trending_flat
            </span> */}{' '}
            + bespokeComponents, and {`{...everythingElse}`}. Just ask! I
            built&nbsp;
            <motion.a
              href='https://codyderbyshire.com'
              target='_blank'
              className='h1-link'
              style={initStyle}
              whileHover={hoverStyle}
            >
              (this.site)
            </motion.a>
            &nbsp;from scratch +&nbsp;
            <motion.a
              href='https://font-select.onrender.com'
              target='_blank'
              className='h1-link'
              style={initStyle}
              whileHover={hoverStyle}
            >
              (this.one)
            </motion.a>
            &nbsp;&&&nbsp;
            <motion.a
              href='https://black-garlic-furniture.onrender.com'
              target='_blank'
              className='h1-link'
              style={initStyle}
              whileHover={hoverStyle}
            >
              (this.too).
            </motion.a>
            <br />
            Have a look ↓
          </h1>
        )}
        {activeTab === 'Contact' && (
          <h1
            className='h1-clamp'
            style={{ fontFamily: 'Inter', fontWeight: '500' }}
          >
            Based in Wellington, New Zealand{' '}
            <span className='material-symbols-outlined h1-clamp'>globe</span>{' '}
            {`{Open to work}`}.{' '}
            <motion.div
              className='inline'
              style={initStyle}
              whileHover={hoverStyle}
            >
              <a href='https://codyderbyshire-cv.onrender.com' target='_blank'>
                [CV]
              </a>
            </motion.div>{' '}
            here. Contact me @{' '}
            <motion.div
              className='inline'
              style={initStyle}
              whileHover={hoverStyle}
            >
              <CopyToClipboard
                text={'derbyshire@outlook.co.nz'}
                onCopy={handleCopyE}
              >
                {isEClicked ? (
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    copied!
                  </p>
                ) : (
                  <p
                    onClick={() => setIsEClicked(true)}
                    style={{
                      display: 'inline',
                    }}
                  >
                    [email]
                  </p>
                )}
              </CopyToClipboard>
            </motion.div>
            &nbsp;||&nbsp;
            <motion.div
              className='inline'
              style={initStyle}
              whileHover={hoverStyle}
            >
              <CopyToClipboard text={'+64220725530'} onCopy={handleCopyP}>
                {isPClicked ? (
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    copied!
                  </p>
                ) : (
                  <p
                    onClick={() => setIsPClicked(true)}
                    style={{
                      display: 'inline',
                    }}
                  >
                    [phone].
                  </p>
                )}
              </CopyToClipboard>
            </motion.div>{' '}
            <span className='h1-clamp-xs copy inter-italic'>
              &larr; click to copy{' '}
              {/* <span className='material-symbols-outlined h1-clamp-xs'>
                content_copy
              </span> */}
            </span>
          </h1>
        )}
      </div>
    </>
  );
};

export default HeroText;
