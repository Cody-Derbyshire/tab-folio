import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import '../styling/Nav.css';

const Nav = ({ activeTab, setActiveTab, tabs, col, bgCol }) => {
  return (
    <>
      <nav className='nav-wrapper'>
        {Object.keys(tabs).map((tab) => (
          <motion.p
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: 'pointer',
              opacity: activeTab === tab ? 1 : 0.5,
              borderBottom:
                activeTab === tab
                  ? `solid 0.1rem ${col}`
                  : `solid 0.1rem ${bgCol}`,
              transition: '0.2s ease-in-out',
            }}
            className='hover-nav'
          >
            {tab}
          </motion.p>
        ))}
      </nav>
    </>
  );
};

export default Nav;
