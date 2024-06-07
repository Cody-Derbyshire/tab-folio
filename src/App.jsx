import { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import HeroText from './components/HeroText';
import Work from './components/Work';
import Me from './components/Me';

import LeftFade from './functions/LeftFade';
import RightFade from './functions/RightFade';

import tabs from '../src/tabs.json';

import './App.css';
import './styling/fonts.css';

const App = () => {
  const [colorScheme, setColorScheme] = useState('light');
  const [activeTab, setActiveTab] = useState('Home');

  const dark = '#525252';
  const light = '#f2f2f2';
  const yellow = '#E4FC53';
  const blue = '#2d51ff';
  const green = '#31fe6a';
  const darkGreen = '#004051';
  const purple = '#c294ff';
  const pink = '#ff6fff';
  const orange = '#ff5d01';
  const maroon = '#680030';

  let bgCol, col;

  switch (colorScheme) {
    case 'light':
      bgCol = light;
      col = dark;
      break;
    case 'dark':
      bgCol = dark;
      col = light;
      break;
    case 'yellow':
      bgCol = yellow;
      col = blue;
      break;
    case 'blue':
      bgCol = blue;
      col = yellow;
      break;
    case 'green':
      bgCol = green;
      col = darkGreen;
      break;
    case 'darkGreen':
      bgCol = darkGreen;
      col = green;
      break;
    case 'purple':
      bgCol = purple;
      col = blue;
      break;
    case 'pink':
      bgCol = pink;
      col = maroon;
      break;
    case 'orange':
      bgCol = orange;
      col = maroon;
      break;
    case 'maroon':
      bgCol = maroon;
      col = yellow;
      break;
    default:
      bgCol = light; // Default to light if colorScheme is not recognized
      col = dark;
      break;
  }

  const initStyle = {
    color: col,
    boxShadow: `inset 0 0 0 0 ${col}`,
    padding: '0 0.25rem',
    borderBottom: `solid clamp(0.15rem, 0.1071rem + 0.2143vi, 0.3rem) ${col}`,

    transition: 'color .2s ease-in, box-shadow .2s ease-in',
    cursor: 'pointer',
  };
  const hoverStyle = {
    color: bgCol,
    boxShadow: `inset 100rem 0 0 0 ${col}`,
  };

  return (
    <>
      <div
        style={{
          background: bgCol,
          color: col,
        }}
      >
        <div
          className='main-wrapper inter-med '
          style={{
            background: bgCol,
            color: col,
          }}
        >
          <div className='overlay'></div>
          <Header
            colorScheme={colorScheme}
            setColorScheme={setColorScheme}
            bgCol={bgCol}
            col={col}
          />
          <Nav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            col={col}
            bgCol={bgCol}
          />
          <LeftFade>
            <HeroText
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              colorScheme={colorScheme}
              bgCol={bgCol}
              col={col}
              initStyle={initStyle}
              hoverStyle={hoverStyle}
            />
          </LeftFade>
        </div>
        {activeTab === 'Work' && <Work bgCol={bgCol} col={col} />}
        <RightFade>
          {activeTab === 'Contact' && (
            <Me
              bgCol={bgCol}
              col={col}
              initStyle={initStyle}
              hoverStyle={hoverStyle}
            />
          )}
        </RightFade>
      </div>
    </>
  );
};

export default App;
