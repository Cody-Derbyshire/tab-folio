import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';

import '../styling/ContactLink.css';

const ContactLink = ({ copylink, input }) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    // Reset isClicked to false after 2 seconds
    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 2000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [isClicked]);

  const handleCopy = (text, result) => {
    if (result) {
      setIsClicked(true);
    }
  };
  return (
    <CopyToClipboard text={input} onCopy={handleCopy}>
      {isClicked ? (
        <p>copied!</p>
      ) : (
        <p onClick={() => setIsClicked(true)}>{copylink}</p>
      )}
    </CopyToClipboard>
  );
};

export default ContactLink;

{
  /*  */
}
